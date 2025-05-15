import { Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { HeadingComponent } from "../components/heading/HeadingComponent";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useEffect, useState } from "react";
import { ServiceList } from "../components/serviceList/ServiceList";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useAddFavoriteMutation, useDeleteFavoriteMutation, useGetFavoriteQuery } from "../store/services/productsApi";
import { useDispatch, useSelector } from "react-redux";
import { selectUserId } from "../store/slices/auth.slice";
import { PortfolioList } from "../components/portfolio/PortfolioList";
import { addFavorite, removeFavorite, setFavorites } from "../store/slices/favorites.slice";
import {
  loadFavoritesFromLocalStorage,
  saveFavoritesToLocalStorage,
} from "../utils/favoritesLocalStorage/favoritesLocalStorage";

export const DetailProductScreen = ({ route }) => {
  const { salonId, salonName, salonImage } = route.params;
  const [activeTab, setActiveTab] = useState("Services");
  const navigation = useNavigation();
  const userId = useSelector(selectUserId);
  const favorites = useSelector((state) => state.favorites.favorites);
  const dispatch = useDispatch();

  const [addFavoriteMutation] = useAddFavoriteMutation();
  const [deleteFavoriteMutation] = useDeleteFavoriteMutation();

  useEffect(() => {
    const syncFavoritesWithServer = async () => {
      try {
        const serverFavorites = useGetFavoriteQuery({ userId });
        const localFavorites = await loadFavoritesFromLocalStorage();

        const favoritesToAdd = localFavorites.filter(
          (localFav) => !serverFavorites.some((serverFav) => serverFav.salonId === localFav.salonId)
        );

        const favoritesToRemove = serverFavorites.filter(
          (serverFav) => !localFavorites.some((localFav) => localFav.salonId === serverFav.salonId)
        );

        for (const favorite of favoritesToAdd) {
          await addFavoriteMutation({ userId, salonId: favorite.salonId }).unwrap();
        }

        for (const favorite of favoritesToRemove) {
          await deleteFavoriteMutation({ favoriteId: favorite.favoriteId }).unwrap();
        }

        const updatedFavorites = [...serverFavorites, ...favoritesToAdd].filter(
          (fav) => !favoritesToRemove.some((removeFav) => removeFav.salonId === fav.salonId)
        );
        dispatch(setFavorites(updatedFavorites));
        await saveFavoritesToLocalStorage(updatedFavorites);
      } catch (error) {
        console.error("Failed to sync favorites with server:", error);
      }
    };

    const intervalId = setInterval(syncFavoritesWithServer, 12 * 60 * 60 * 1000);

    return () => clearInterval(intervalId);
  }, [userId, dispatch, addFavoriteMutation, deleteFavoriteMutation]);

  const isFavorite = Array.isArray(favorites) && favorites.some((fav) => fav.salonId === salonId);

  const handleFavoritePress = async () => {
    if (isFavorite) {
      const favorite = favorites.find((fav) => fav.salonId === salonId);
      if (!favorite) {
        console.error("Favorite not found for salonId:", salonId);
        return;
      }

      const favoriteId = favorite.favoriteId;

      const updatedFavorites = favorites.filter((fav) => fav.salonId !== salonId);
      dispatch(removeFavorite(salonId));
      await saveFavoritesToLocalStorage(updatedFavorites);

      try {
        await deleteFavoriteMutation({ favoriteId }).unwrap();
      } catch (error) {
        console.error("Failed to remove from favorites:", error);
        dispatch(addFavorite({ salonId, userId }));
        await saveFavoritesToLocalStorage([...updatedFavorites, { salonId, userId }]);
      }
    } else {
      const newFavorite = { salonId, userId };

      const updatedFavorites = [...favorites, newFavorite];
      dispatch(addFavorite(newFavorite));
      await saveFavoritesToLocalStorage(updatedFavorites);

      try {
        await addFavoriteMutation({ userId, salonId }).unwrap();
      } catch (error) {
        console.error("Failed to add to favorites:", error);
        dispatch(removeFavorite(salonId));
        await saveFavoritesToLocalStorage(favorites);
      }
    }
  };

  return (
    <>
      <Pressable onPress={() => navigation.goBack()} style={styles.backButton}>
        <AntDesign name="swapleft" size={50} color="black" />
      </Pressable>
      <Image source={{ uri: salonImage }} style={styles.image} />

      <View style={styles.container}>
        <View style={styles.wrapperInformation}>
          <View>
            <HeadingComponent level={1} children={salonName} />
            <View style={styles.addressContainer}>
              <Icon name="location-on" size={15} color="#000" />
              <Text style={styles.address}>Aleja Armii Krajowej 43, Wroclaw</Text>
            </View>
          </View>
          <TouchableOpacity onPress={handleFavoritePress} style={styles.favoriteIcon}>
            <Icon name={isFavorite ? "favorite" : "favorite-border"} size={35} color={isFavorite ? "red" : "black"} />
          </TouchableOpacity>
        </View>
        <View style={styles.tabContainer}>
          <TouchableOpacity
            style={[styles.tab, activeTab === "Services" && styles.activeTab]}
            onPress={() => setActiveTab("Services")}
          >
            <Text style={[styles.tabText, activeTab === "Services" && styles.activeTabText]}>Services</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, activeTab === "Reviews" && styles.activeTab]}
            onPress={() => setActiveTab("Reviews")}
          >
            <Text style={[styles.tabText, activeTab === "Reviews" && styles.activeTabText]}>Reviews</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, activeTab === "Portfolio" && styles.activeTab]}
            onPress={() => setActiveTab("Portfolio")}
          >
            <Text style={[styles.tabText, activeTab === "Portfolio" && styles.activeTabText]}>Portfolio</Text>
          </TouchableOpacity>
        </View>
        {activeTab === "Services" && <ServiceList salonId={salonId} />}
        {activeTab === "Portfolio" && <PortfolioList />}
        {activeTab === "Reviews" && (
          <View>
            <Text style={{ color: "black", textAlign: "center", fontSize: 15 }}>Here will be reviews.</Text>
          </View>
        )}
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    backgroundColor: "#FFFAFC",
    width: "100%",
    height: "75%",
    paddingHorizontal: 20,
    paddingTop: 35,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },

  address: {
    fontFamily: "KohSantepheap-Regular",
    fontSize: 13,
    color: "#000000",
  },
  image: {
    width: "100%",
    height: 260,
  },
  backButton: {
    position: "absolute",
    top: 65,
    left: 20,
    zIndex: 1,
  },
  addressContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginTop: 20,
    marginBottom: 30,
  },
  wrapperInformation: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  favoriteIcon: {
    marginTop: 12,
  },
  tabText: {
    fontSize: 15,
    fontFamily: "KohSantepheap-Regular",
    color: "#000000",
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#EAE9E9",
    borderRadius: 10,
  },
  activeTabText: {
    backgroundColor: "#F7CCC3",
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 35,
  },
});

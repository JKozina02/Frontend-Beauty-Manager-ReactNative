import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import ProductComponent from "../components/ui/ProductComponent.js";
import { HeadingComponent } from "../components/heading/HeadingComponent";
import { selectUserId } from "../store/slices/auth.slice";
import { useSelector } from "react-redux";
import { useGetFavoriteQuery, useGetServicesQuery } from "../store/services/productsApi";

export const FavoritesScreen = () => {
  const navigation = useNavigation();
  const userId = useSelector(selectUserId);
  const {
    data: favorites = [],
    isLoading: isFavoritesLoading,
    error: favoritesError,
  } = useGetFavoriteQuery({ userId });
  const { data: products = {}, isLoading, error } = useGetServicesQuery();

  console.log("Favorites:", favorites);
  console.log("Products:", products);

  if (isFavoritesLoading) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (favoritesError) {
    return (
      <View style={styles.container}>
        <Text>Error loading data.</Text>
      </View>
    );
  }

  const salonsList = Array.isArray(products.salonsList) ? products.salonsList : [];
  console.log("Salons List:", salonsList);

  const favoriteProducts = salonsList.filter((product) =>
    favorites.some((favorite) => {
      const productId = String(product.salonId).trim();
      const favoriteId = String(favorite.salonId).trim();
      console.log("Comparing:", favoriteId, productId);
      return favoriteId === productId;
    })
  );

  console.log("Favorite Products:", favoriteProducts);

  const salonCount = favoriteProducts.length;

  return (
    <View style={styles.container}>
      <View style={styles.wrapperInformation}>
        <Pressable onPress={() => navigation.goBack()}>
          <AntDesign name="swapleft" size={50} color="black" />
        </Pressable>
        <HeadingComponent level={3} color="#000000" children={"Favorites"} />
      </View>
      <View style={styles.favoritesList}>
        <HeadingComponent level={3} color="#000000" children={`Favorites - ${salonCount}`} />

        <FlatList
          data={favoriteProducts}
          keyExtractor={(item) => item.salonId}
          renderItem={({ item }) => (
            <ProductComponent
              id={item.salonId}
              image={item.image}
              name={item.title}
              address={item.description}
              rating={item.rating || 3.5}
            />
          )}
          numColumns={2}
          columnWrapperStyle={styles.row}
          contentContainerStyle={styles.listContent}
          ListEmptyComponent={<Text style={styles.emptyText}>No favorites found.</Text>}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: "#F7CCC3",
  },
  wrapperInformation: {
    flexDirection: "row",
    alignItems: "center",
    gap: 80,
    marginHorizontal: 20,
  },
  favoritesList: {
    position: "absolute",
    bottom: 0,
    backgroundColor: "#FFFAFC",
    height: "90%",
    width: "100%",
    paddingHorizontal: 15,
    paddingTop: 35,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  listContent: {
    marginTop: 20,
    gap: 20,
  },
  row: {
    justifyContent: "space-between",
  },
});

import { Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { HeadingComponent } from "../components/heading/HeadingComponent";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useState } from "react";
import { ServiceList } from "../components/serviceList/ServiceList";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export const DetailProductScreen = ({ route }) => {
  const { salonId, salonName, salonImage } = route.params;
  const [activeTab, setActiveTab] = useState("Services");
  const navigation = useNavigation();

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
              <Icon name="location-on" size={15} color="#00000" />
              <Text style={styles.address}>aleja armii krajowej 43, Wroclaw</Text>
            </View>
          </View>
          <View style={styles.favoriteIcon}>
            <Icon name="favorite-border" size={35} color="#00000" />
          </View>
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
        {activeTab === "Services" && <ServiceList />}
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

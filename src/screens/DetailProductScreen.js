import { useNavigation } from "@react-navigation/native";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ServiceComponent } from "../components/service/ServiceComponent";
import { HeadingComponent } from "../components/heading/HeadingComponent";
import Icon from "react-native-vector-icons/MaterialIcons";

export const DetailProductScreen = () => {
  const navigation = useNavigation();

  const services = [
    { id: "1", name: "Women's haircut", price: "60.00 zł" },
    { id: "2", name: "Men's haircut", price: "50.00 zł" },
    { id: "3", name: "Hair coloring", price: "120.00 zł" },
    { id: "4", name: "Hair styling", price: "80.00 zł" },
    { id: "5", name: "Women's haircut", price: "60.00 zł" },
    { id: "6", name: "Men's haircut", price: "50.00 zł" },
    { id: "7", name: "Hair coloring", price: "120.00 zł" },
    { id: "8", name: "Hair styling", price: "80.00 zł" },
  ];

  const handleServicePress = (service) => {
    navigation.navigate("BookingServiceScreen", { serviceId: service.id, serviceName: service.name });
  };

  return (
    <View style={styles.container}>
      <View style={styles.wrapperInformation}>
        <View>
          <HeadingComponent level={1} children={"Salon Artist"} />
          <View style={styles.addressContainer}>
            <Icon name="location-on" size={15} color="#00000" />
            <Text style={styles.address}>aleja armii krajowej 43, Wroclaw</Text>
          </View>
        </View>
        <View style={styles.favoriteIcon}>
          <Icon name="favorite-border" size={35} color="#00000" />
        </View>
      </View>
      <FlatList
        data={services}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleServicePress(item)}>
            <ServiceComponent name={item.name} price={item.price} />
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFAFC",
    width: "100%",
    height: "80%",
    marginTop: 20,
    paddingHorizontal: 20,
    paddingTop: 35,
    paddingBottom: 70,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  listContent: {
    paddingBottom: 100,
    gap: 20,
  },
  address: {
    fontFamily: "KohSantepheap-Regular",
    fontSize: 13,
    color: "#000000",
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
});

import { useNavigation } from "@react-navigation/native";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ServiceComponent } from "../components/service/ServiceComponent";

export const DetailProductScreen = () => {
  const navigation = useNavigation();

  const services = [
    { id: "1", name: "Women's haircut", price: "60.00 zł" },
    { id: "2", name: "Men's haircut", price: "50.00 zł" },
    { id: "3", name: "Hair coloring", price: "120.00 zł" },
    { id: "4", name: "Hair styling", price: "80.00 zł" },
  ];

  const handleServicePress = (service) => {
    navigation.navigate("BookingServiceScreen", { serviceId: service.id, serviceName: service.name });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Salon Artist</Text>
      <Text style={styles.address}>aleja armii krajowej 43, Wroclaw</Text>

      <FlatList
        data={services}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleServicePress(item)}>
            <ServiceComponent name={item.name} price={item.price} />
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFAFC",
  },
  listContent: {
    paddingBottom: 100,
    gap: 20,
  },
});

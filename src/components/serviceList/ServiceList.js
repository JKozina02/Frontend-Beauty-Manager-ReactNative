import { useNavigation } from "@react-navigation/native";
import { FlatList, TouchableOpacity } from "react-native";
import { ServiceComponent } from "../service/ServiceComponent";

export const ServiceList = () => {
  const navigation = useNavigation();

  const handleServicePress = (service) => {
    navigation.navigate("BookingServiceScreen", { serviceId: service.id, serviceName: service.name });
  };

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

  return (
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
  );
};

const styles = StyleSheet.create({
  listContent: {
    paddingBottom: 100,
    gap: 15,
  },
});

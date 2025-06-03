import { useNavigation, useRoute } from "@react-navigation/native";
import { FlatList, StyleSheet, Text } from "react-native";
import ServiceComponent from "../service/ServiceComponent";
import { useGetSalonsServicesQuery } from "../../store/services/productsApi";

export const ServiceList = ({ salonId }) => {
  const navigation = useNavigation();
  const route = useRoute();

  const salonIdParam = salonId || route.params?.salonId;
  const { data: services = [], isLoading, error } = useGetSalonsServicesQuery({ salonId: salonIdParam });

  const handleServicePress = (service) => {
    navigation.navigate("BookingServiceScreen", {
      salonId: salonIdParam,
      serviceId: service.serviceId,
    });
  };

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error loading services.</Text>;
  }

  if (!services.length) {
    return <Text>No services found for this salon.</Text>;
  }

  return (
    <FlatList
      data={services}
      keyExtractor={(item) => item.serviceId}
      renderItem={({ item }) => (
        <ServiceComponent name={item.title} price={`${item.price} zl`} onPress={() => handleServicePress(item)} />
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

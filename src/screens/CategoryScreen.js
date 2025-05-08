import React from "react";
import { StyleSheet, ScrollView, Text } from "react-native";
import ProductComponent from "../components/ui/ProductComponent";
import { useRoute } from "@react-navigation/native";

const CategoryScreen = () => {
  const route = useRoute();
  const { categoryId, categoryName } = route.params;

  const dummyData = {
    id: categoryId,
    image:
      "https://images.kikocosmetics.com/lf2wbbijeo86/1Vx6ers0mjdfH9ESN9PhPl/28098bd3f6d1b7b94a6f69d19a96e692/Info_BeautyServices_NEW-Landing-Header_MakeupAndGo.jpg?w=1920&fm=webp",
    name: "Salon Artist",
    address: "Tęczowa, Wrocław",
    rating: 4.6,
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}> {categoryName}</Text>
      <ProductComponent
        id={dummyData.id}
        image={dummyData.image}
        name={dummyData.name}
        address={dummyData.address}
        rating={dummyData.rating}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 90,
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
});

export default CategoryScreen;

import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import ProductComponent from "../components/ui/ProductComponent";
const CategoryScreen = () => {
  const dummyData = {
    id: "12345",
    image:
      "https://images.kikocosmetics.com/lf2wbbijeo86/1Vx6ers0mjdfH9ESN9PhPl/28098bd3f6d1b7b94a6f69d19a96e692/Info_BeautyServices_NEW-Landing-Header_MakeupAndGo.jpg?w=1920&fm=webp", // przykładowy obrazek
    name: "Salon Artist",
    address: "Tęczowa, Wrocław",
    rating: 4.5,
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
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
});

export default CategoryScreen;

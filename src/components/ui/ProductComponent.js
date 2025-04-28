import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";



const ProductComponent = ({ id, image, name, address }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("ServiceDetailsScreen", { id });
  };

  return (
    <TouchableOpacity style={styles.card} onPress={handlePress}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{name}</Text>
        <View>
          <Text style={styles.address}>{address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFAFC",
    margin: 8,
    overflow: "hidden",
  },
  image: {
    width: 188,
    height: 139,
    borderRadius: 15,
  },
  info: {
    padding: 6,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },
  address: {
    fontSize: 13,
    marginTop: 6,
  },
});

export default ProductComponent;

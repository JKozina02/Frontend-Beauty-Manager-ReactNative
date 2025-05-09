import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
import FractionalStar from "../ui//FractionalStar"; // Import your FractionalStar component

const ProductComponent = ({ id, image, name, address, rating }) => {
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
          <View style={styles.starsRow}>
            {renderStars(rating ?? 0)}
            <Text style={styles.ratingText}>{rating?.toFixed(1) ?? "0.0"}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const renderStars = (rating) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const decimal = rating - fullStars;

  for (let i = 0; i < fullStars; i++) {
    stars.push(<Icon key={`full-${i}`} name="star" size={20} color="#FFD700" />);
  }

  if (decimal > 0) {
    stars.push(<FractionalStar key="fractional" fill={decimal} />);
  }

  const totalStars = fullStars + (decimal > 0 ? 1 : 0);

  for (let i = totalStars; i < 5; i++) {
    stars.push(<Icon key={`empty-${i}`} name="star-border" size={20} color="#FFD700" />);
  }

  return stars;
};

const styles = StyleSheet.create({
  card: {
    margin: 8,
    overflow: "hidden",
    borderRadius: 15,
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
  starsRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },
  address: {
    fontSize: 13,
    marginTop: 6,
  },
  ratingText: {
    marginLeft: 16,
    fontSize: 13,
    color: "#FFAE00",
  },
});

export default ProductComponent;

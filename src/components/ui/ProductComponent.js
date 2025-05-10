import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { renderStars } from "../../utils/renderStars/renderStars";

const ProductComponent = ({ id, image, name, address, rating }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("DetailProductScreen", { id });
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

const styles = StyleSheet.create({
  card: {
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

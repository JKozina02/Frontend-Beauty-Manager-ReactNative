import { View, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const CategoryComponent = ({ category }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("CategoryScreen", { categoryId: category.id_category, categoryName: category.name });
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.card}>
      <View style={styles.circle}>
        <Image source={category.image} style={styles.icon} />
      </View>
    </TouchableOpacity>
  );
};

export default CategoryComponent;

const styles = StyleSheet.create({
  card: {
    alignItems: "center",
    marginRight: 12,
  },
  circle: {
    width: 75,
    height: 75,
    borderRadius: 40,
    backgroundColor: "#F7CCC34F",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    width: 36,
    height: 36,
    resizeMode: "contain",
  },
});

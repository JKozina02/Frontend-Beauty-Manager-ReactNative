import { Text, View } from "react-native";

export const FavoritesScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Favorites</Text>
      <Text style={styles.message}>You have no favorite salons yet.</Text>
    </View>
  );
};

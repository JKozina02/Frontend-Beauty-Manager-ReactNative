import { FlatList, Image, StyleSheet, View } from "react-native";
import portfolio from "../../data/portfolio";

export const PortfolioList = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={portfolio}
        contentContainerStyle={styles.list}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Image source={item.image} style={styles.image} />}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 180,
  },
  image: {
    width: "49%",
    borderRadius: 10,
  },
  list: {
    gap: 14,
  },
});

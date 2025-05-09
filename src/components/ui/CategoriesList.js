import React from "react";
import { FlatList, View, StyleSheet } from "react-native";
import CategoryComponent from "./CategoryComponent";
import categories from "../../data/categories";

const CategoriesList = () => (
  <View style={styles.container}>
    <FlatList
      data={categories}
      horizontal
      keyExtractor={(item) => item.id_category}
      renderItem={({ item }) => <CategoryComponent category={item} />}
      contentContainerStyle={styles.listContent}
      showsHorizontalScrollIndicator={false}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
  },
  listContent: {
    paddingHorizontal: 16,
    gap: 12,
  },
});

export default CategoriesList;

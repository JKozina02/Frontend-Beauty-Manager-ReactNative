import { FlatList, View, StyleSheet } from "react-native";
import CategoryComponent from "./CategoryComponent";
import categories from "../../data/categories";
import { HeadingComponent } from "../heading/HeadingComponent";

const CategoriesList = () => (
  <View style={styles.container}>
    <HeadingComponent children={"Category"} level={3} color="#000000" />
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
    paddingHorizontal: 16,
    gap: 20,
  },
  listContent: {
    gap: 12,
  },
});

export default CategoriesList;

import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../../../store/slices/filter.slice";

export const FiltersCategoryComponent = () => {
  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) => state.filter.filters.category);

  const categories = ["Nails", "Hair", "Eyelashes", "Eyebrows", "MakeUp"];
  
  return (
    <View style={styles.categoriesContainer}>
      {categories.map((category) => (
        <TouchableOpacity
          key={category}
          style={[styles.categoryButton, selectedCategory === category && styles.selectedCategoryButton]}
          onPress={() => dispatch(setCategory(category))}
        >
          <Text style={styles.categoryButtonText}>{category}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  filterText: {
    fontSize: 20,
  },
  categoriesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 20,
    marginBottom: 40,
    gap: 5,
  },
  categoryButton: {
    backgroundColor: "#f5f5f5",
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  selectedCategoryButton: {
    backgroundColor: "#F7CCC3",
  },
  categoryButtonText: {
    fontFamily: "KohSantepheap-Regular",
    fontSize: 14,
  },
  selectedCategoryButtonText: {
    color: "#ffffff",
  },
});

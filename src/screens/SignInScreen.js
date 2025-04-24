import { View, StyleSheet } from "react-native";
import SearchBarComponent from "../components/searchBar/searchBarComponent";
import FiltersButtonComponent from "../components/filters/filtersButtonComponent";
import FiltersComponent from "../components/filters/filtersComponent";
export const SignInScreen = () => {
  return (
    <View style={styles.container}>
      <SearchBarComponent />
      <FiltersButtonComponent />
      <FiltersComponent />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    flexDirection: "row",
  },
});

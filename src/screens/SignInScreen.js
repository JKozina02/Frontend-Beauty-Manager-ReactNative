import { View, StyleSheet } from "react-native";
import SearchBarComponent from "../components/searchBar/SearchBarComponent";
import FiltersButtonComponent from "../components/filters/subComponents/FiltersButtonComponent";
import FiltersComponent from "../components/filters/FiltersComponent";
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

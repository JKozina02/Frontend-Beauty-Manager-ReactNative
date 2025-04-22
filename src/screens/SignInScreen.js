import { Text, View, StyleSheet} from "react-native";
import SearchBarComponent from "../components/searchBar/searchBarComponent";
import { useSelector } from "react-redux";

export const SignInScreen = () => {
  const input = useSelector((state) => state.search.query);
  return(
    <View style={styles.container}>
        <SearchBarComponent/>
        <Text>Current Search: {input}</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ustawia kontener na pełną wysokość i szerokość ekranu
    justifyContent: "center", // Wyśrodkowanie w pionie
    alignItems: "center", // Wyśrodkowanie w poziomie
    backgroundColor: "#f5f5f5", // Opcjonalne tło dla lepszej widoczności
  },
})
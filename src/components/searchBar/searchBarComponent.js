import { TouchableOpacity, View, StyleSheet, TextInput } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { setSearchQuery } from "../../store/slices/searchSlice";
import AntDesign from "@expo/vector-icons/AntDesign";

export const SearchBarComponent = () => {
  const dispatch = useDispatch();
  const query = useSelector((state) => state.search.query);

  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <AntDesign name="search1" size={30} color="#F7CCC3" />
      </TouchableOpacity>
      <TextInput
        placeholder="Search..."
        placeholderTextColor="#888"
        value={query}
        onChangeText={(text) => dispatch(setSearchQuery(text))}
        style={styles.input}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    height: 50,
    backgroundColor: "#ffffff",
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  input: {
    flex: 1,
    paddingLeft: 15,
    fontSize: 16,
    backgroundColor: "#ffffff",
  },
});

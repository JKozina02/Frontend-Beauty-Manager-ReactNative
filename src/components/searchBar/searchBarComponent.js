import { TouchableOpacity, View, Image, StyleSheet, TextInput } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { setSearchQuery } from "../../store/slices/searchSlice";

export const SearchBarComponent = () => {
  const dispatch = useDispatch();
  const query = useSelector((state) => state.search.query);
  //TODO IMPLEMENT SEARCH
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image source={require("../../../assets/searchicon.png")} style={styles.icon} />
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    height: 50,
    backgroundColor: "#ffffff",
    paddingHorizontal: 10,
    borderRadius: 10,
    margin: 5,
  },
  icon: {
    width: 20,
    height: 20,
    marginHorizontal: 5,
  },
  input: {
    flex: 1,
    paddingLeft: 15,
    fontSize: 16,
    backgroundColor: "#ffffff",
  },
});

import { Pressable, View, Image, StyleSheet, Dimensions, TextInput } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { setSearchQuery } from "../../store/slices/searchSlice";

const { width } = Dimensions.get("window");

export default function SearchBarComponent() {
  const dispatch = useDispatch();
  const query = useSelector((state) => state.search.query);

  return (
    <View style={styles.container}>
      <Pressable>
        <Image source={require("../../../assets/searchicon.png")} style={styles.icon} />
      </Pressable>
      <TextInput
        placeholder="Search..."
        placeholderTextColor="#888"
        value={query}
        onChangeText={(text) => dispatch(setSearchQuery(text))}
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
    color: "#000",
  },
});

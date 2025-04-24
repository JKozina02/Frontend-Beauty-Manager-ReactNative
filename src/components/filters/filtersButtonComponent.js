import { View, Pressable, StyleSheet } from "react-native";
import { Image } from "expo-image";
import { useDispatch } from "react-redux";
import { showModal } from "../../store/slices/filterSlice";

export default FiltersButtonComponent = () => {
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Pressable onPress={() => dispatch(showModal())}>
        <Image source={require("../../../assets/filters.png")} style={styles.icon} contentFit="contain" />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    height: 50,
    width: 50,
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    margin: 5,
  },
  icon: {
    height: 30,
    width: 30,
  },
});

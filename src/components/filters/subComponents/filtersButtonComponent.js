import { View, TouchableOpacity, StyleSheet } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import { useDispatch } from "react-redux";
import { showModal } from "../../../store/slices/filterSlice";

export const FiltersButtonComponent = () => {
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => dispatch(showModal())}>
        <Entypo name="sound-mix" size={30} color="#F7CCC3" />
      </TouchableOpacity>
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
  },
});

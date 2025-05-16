import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { hideModal, resetFilters } from "../../../store/slices/filter.slice";
import { useDispatch } from "react-redux";
import { HeadingComponent } from "../../heading/HeadingComponent";

export const FiltersHeaderComponent = () => {
  const dispatch = useDispatch();
  return (
    <View style={styles.header}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => dispatch(hideModal())}>
          <AntDesign name="swapleft" size={40} />
        </TouchableOpacity>
      </View>
      <HeadingComponent level={3} children={"Filters"} />
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => dispatch(resetFilters())}>
          <Text style={{ fontSize: 20, fontFamily: "KohSantepheap-Regular" }}>Reset</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    height: 50,
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 54,
    marginBottom: 40,
  },
  buttonContainer: {
    width: "15%",
    alignItems: "center",
  },
});

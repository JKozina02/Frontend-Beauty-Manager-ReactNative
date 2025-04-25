import { View, StyleSheet, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import { hideModal, resetFilters } from "../../../store/slices/filterSlice";
import { useDispatch } from "react-redux";

export default FiltersHeaderComponent = () => {
  const dispatch = useDispatch();
  return (
    <View style={styles.header}>
      <Pressable onPress={() => dispatch(hideModal())}>
        <Image source={require("../../../../assets/back.png")} style={styles.icon} contentFit="contain" />
      </Pressable>
      <Text style={{ fontFamily: "KohSantepheap-Bold", fontSize: 24 }}>Filter</Text>
      <Pressable onPress={() => dispatch(resetFilters())}>
        <Text style={{ fontSize: 16, fontFamily: "KohSantepheap-Regular" }}>Reset</Text>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    height: 50,
    justifyContent: "space-between",
    alignItems: "center",
  },

  icon: {
    height: 30,
    width: 30,
  },
});

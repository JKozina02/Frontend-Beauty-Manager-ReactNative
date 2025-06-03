import { AntDesign } from "@expo/vector-icons";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { CustomTextComponent } from "../customText/CustomTextComponent";

const ServiceComponent = ({ name, price, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.wrapperTitle}>
        <CustomTextComponent children={name} />
        <Text style={styles.price}>{price}</Text>
      </View>
      <AntDesign name="arrowleft" size={24} color="black" style={styles.icon} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDECEA",
    borderRadius: 15,
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 18,
    justifyContent: "space-between",
  },
  price: {
    fontSize: 13,
    color: "#A09B99",
    fontFamily: "KohSantepheap-Regular",
  },
  wrapperTitle: {
    gap: 5,
  },
  icon: {
    transform: [{ rotate: "120deg" }],
  },
});

export default ServiceComponent;

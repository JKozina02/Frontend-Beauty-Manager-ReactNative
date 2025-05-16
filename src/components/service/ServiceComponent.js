import { AntDesign } from "@expo/vector-icons";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { CustomTextComponent } from "../customText/CustomTextComponent";
import { Text } from "react-native";

export const ServiceComponent = ({ name, price }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => console.log("navigation to booking")}>
      <View style={styles.wrapperTitle}>
        <CustomTextComponent children={name} />
        <Text style={styles.price}>{price}</Text>
      </View>
      <AntDesign
        name="arrowleft"
        size={24}
        color="black"
        style={styles.icon}
        onPress={() => console.log("navigation to booking")}
      />
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

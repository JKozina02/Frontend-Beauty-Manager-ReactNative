import { Text, StyleSheet } from "react-native";

export const CustomTextComponent = ({ children, style }) => {
  return <Text style={[styles.text, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontFamily: "KohSantepheap-Regular",
    color: "#000000",
    fontSize: 20,
  },
});

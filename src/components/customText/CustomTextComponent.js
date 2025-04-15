import { Text, StyleSheet } from "react-native";

export const CustomTextComponent = ({ children }) => {
  return <Text style={styles.text}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontFamily: "KohSantepheap-Regular",
    color: "#000000",
    fontSize: 20,
  },
});

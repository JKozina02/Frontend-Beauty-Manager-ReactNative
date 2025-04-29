import { StyleSheet, Text, TouchableOpacity } from "react-native";

export const CustomButton = ({ onPress, title, backgroundColor, color, style }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, { backgroundColor }, style]}>
      <Text style={[styles.text, { color }]}>{title}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  text: {
    paddingVertical: 20,
    fontFamily: "KohSantepheap-Regular",
    fontSize: 22,
    textAlign: "center",
  },
  button: {
    minHeight: 50,
    borderRadius: 15,
  },
});

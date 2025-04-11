import { StyleSheet, Text, TouchableOpacity } from "react-native";

export const CustomButton = ({ onPress, title, backgroundColor, color }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, { backgroundColor }]}>
      <Text style={[styles.text, { color }]}>{title}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  text: {
    fontFamily: "KohSantepheap-Regular",
    fontSize: 22,
    textAlign: "center",
  },
  button: {
    flex: 1,
    padding: 18,
    borderRadius: 15,
  },
});

import { Text, StyleSheet, TouchableOpacity } from "react-native";

export default HourButton = ({ text, selected = false, disabled = false }) => {
  return (
    <TouchableOpacity style={[styles.container, selected && styles.selected, disabled && styles.disabled]}>
      <Text styles={disabled ? styles.disabledText : styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "#EAE9E9",
    borderRadius: 10,
    width: 60,
    alignItems: "center",
  },
  selected: {
    backgroundColor: "#F7CCC3",
  },
  disabled: {
    backgroundColor: "#7B7B7B",
  },
  text: {
    color: "#000000",
  },
  disabledText: {
    color: "#F5F5F5",
  },
});

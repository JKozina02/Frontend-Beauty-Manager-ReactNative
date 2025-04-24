import { View } from "react-native";
import { Text } from "react-native";
import { StyleSheet, TextInput } from "react-native";

export const InputComponent = ({ placeholder, type, value, onChangeText, error }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.input, error && styles.inputError]}
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
        keyboardType={type}
      />
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    fontFamily: "KohSantepheap-Regular",
    color: "#7B7B7B",
    fontSize: 20,
    width: "100%",
    paddingHorizontal: 15,
    backgroundColor: "#F5F5F5",
    borderRadius: 15,
    height: 60,
  },
  inputError: {
    borderColor: "red",
    borderWidth: 1.5,
    borderStyle: "solid",
    backgroundColor: "#FBDCDC",
  },
  errorText: {
    fontFamily: "KohSantepheap-Regular",
    fontSize: 15,
    marginTop: 13,
  },
});

import { StyleSheet, TextInput } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export const InputComponent = ({ placeholder, type, value, onChange }) => {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={onChange}
          value={value}
          placeholder={placeholder}
          keyboardType={type}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  input: {
    fontFamily: "KohSantepheap-Regular",
    color: "#7B7B7B",
    fontSize: 18,
    flex: 1,
    paddingVertical: 25,
    paddingHorizontal: 15,
    backgroundColor: "#F5F5F5",
    borderRadius: 15,
  },
});

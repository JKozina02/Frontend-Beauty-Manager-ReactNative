import { Image, TouchableOpacity, View } from "react-native";
import { Text } from "react-native";
import { StyleSheet, TextInput } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { togglePasswordVisibility } from "../../store/slices/password.slice";

export const InputComponent = ({ placeholder, type, value, onChangeText, error, secureTextEntry }) => {
  const isPasswordVisible = useSelector((state) => state.passwordVisibility.isPasswordVisible);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <View style={styles.inputWrapper}>
        <TextInput
          style={[styles.input, error && styles.inputError]}
          onChangeText={onChangeText}
          value={value}
          placeholder={placeholder}
          keyboardType={type}
          secureTextEntry={secureTextEntry && !isPasswordVisible}
        />
        {secureTextEntry && (
          <TouchableOpacity onPress={() => dispatch(togglePasswordVisibility())} style={styles.iconContainer}>
            <MaterialCommunityIcons name={isPasswordVisible ? "eye-off" : "eye"} size={26} color="#000000" />
          </TouchableOpacity>
        )}
      </View>
      {error && (
        <View style={styles.errorContainer}>
          <Image source={require("../../../assets/error.png")} />
          <Text style={styles.errorText}>{error}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  inputWrapper: {
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
  },
  iconContainer: {
    position: "absolute",
    right: 15,
    top: "50%",
    transform: [{ translateY: -12 }],
  },
  errorContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginTop: 13,
  },
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
  },
});

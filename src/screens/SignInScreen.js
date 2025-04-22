import { CustomButton } from "../components/buttons/CustomButton";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";

export const SignInScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.wrapperButtons}>
      <CustomButton
        onPress={() => navigation.navigate("MainScreen")}
        title="MainScreen"
        color={"#000000"}
        backgroundColor={"#FFFAFC"}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  wrapperButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 15,
    marginTop: 40,
  },
});

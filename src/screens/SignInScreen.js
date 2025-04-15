import { Text, View } from "react-native";
import { InputComponent } from "../components/form/InputComponent";

export const SignInScreen = () => {
  return (
    <View>
      <InputComponent placeholder={"Your email"} type={"default"} value={""} onChange={""} />
    </View>
  );
};

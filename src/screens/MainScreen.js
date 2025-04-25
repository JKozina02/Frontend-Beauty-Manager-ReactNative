import { NameMenuComponent } from "../components/menu/NameMenuComponent";
import { View } from "react-native";
import PopMenuComponent from "../components/menu/PopMenuComponent";

export const MainScreen = () => {
  return (
    <View>
      <NameMenuComponent name="Kaczka" />
      <PopMenuComponent name="Kaczucha" role="Beauty Artist" />
    </View>
  );
};

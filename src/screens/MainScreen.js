import { TopMenuComponent } from "../components/menu/TopMenuComponent";
import { View } from "react-native";
import PopMenuComponent from "../components/menu/PopMenuComponent";

export const MainScreen = () => {
  return (
    <View>
      <TopMenuComponent category="Kunegunda" />;
      <PopMenuComponent userName="Kaczucha" role="Beauty Artist" />
    </View>
  );
};

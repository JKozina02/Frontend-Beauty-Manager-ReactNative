import { Provider } from "react-redux";
import { store } from "./src/store/store";
import { AppNavigator } from "./src/navigation/AppNavigator";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { loadFonts } from "./src/utils/loadFonts/loadFonts";

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    loadFonts().then(() => setFontsLoaded(true));
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <NavigationContainer theme={DefaultTheme}>
        <AppNavigator />
      </NavigationContainer>
    </Provider>
  );
}

import { Provider } from "react-redux";
import { store } from "./src/store/store";
import { AppNavigator } from "./src/navigation/AppNavigator";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { loadFonts } from "./src/utils/loadFonts/loadFonts";
import i18n from "i18next";
import { I18nextProvider } from "react-i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    fallbackLng: "en",
    detection: {
      order: ["navigator"],
      caches: ["localStorage"],
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    loadFonts().then(() => setFontsLoaded(true));
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <I18nextProvider i18n={i18n}>
      <Provider store={store}>
        <NavigationContainer theme={DefaultTheme}>
          <AppNavigator />
        </NavigationContainer>
      </Provider>
    </I18nextProvider>
  );
}

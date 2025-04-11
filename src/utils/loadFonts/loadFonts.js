import * as Font from "expo-font";

export const loadFonts = async () => {
  await Font.loadAsync({
    "KohSantepheap-Regular": require("../../../fonts/KohSantepheap-Regular.ttf"),
    "KohSantepheap-Bold": require("../../../fonts/KohSantepheap-Bold.ttf"),
    "KohSantepheap-Light": require("../../../fonts/KohSantepheap-Light.ttf"),
  });
};

import AsyncStorage from "@react-native-async-storage/async-storage";

export const loadFavoritesFromLocalStorage = async () => {
  try {
    const serializedState = await AsyncStorage.getItem("favorites");
    if (serializedState === null) {
      return [];
    }
    return JSON.parse(serializedState);
  } catch (error) {
    console.error("Failed to load favorites from AsyncStorage:", error);
    return [];
  }
};

export const saveFavoritesToLocalStorage = async (favorites) => {
  try {
    const serializedState = JSON.stringify(favorites);
    await AsyncStorage.setItem("favorites", serializedState);
  } catch (error) {
    console.error("Failed to save favorites to AsyncStorage:", error);
  }
};

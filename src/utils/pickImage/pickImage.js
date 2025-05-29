import AsyncStorage from "@react-native-async-storage/async-storage";
import { setProfileImage } from "../../store/slices/auth.slice";
import * as ImagePicker from "expo-image-picker";

export const pickImage = async () => {
  const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
  if (!permissionResult.granted) {
    alert("Permission to access gallery is required!");
    return;
  }

  const result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    allowsEditing: true,
    quality: 1,
  });

  if (!result.canceled) {
    const uri = result.assets[0].uri;
    await AsyncStorage.setItem("profileImage", uri);
    dispatch(setProfileImage(uri));
  }
};

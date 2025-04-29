import { StyleSheet, Pressable, View, Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function MenuItemComponent({
  onPress,
  source,
  sizer,
  colour,
  imageStyle,
  option,
  iconLibrary = "Ionicons",
}) {
  let IconComponent;

  if (iconLibrary === "Ionicons") {
    IconComponent = Ionicons;
  } else if (iconLibrary === "MaterialCommunityIcons") {
    IconComponent = MaterialCommunityIcons;
  } else if (iconLibrary === "AntDesign") {
    IconComponent = AntDesign;
  } else {
    IconComponent = Ionicons;
  }

  return (
    <Pressable onPress={onPress} style={({ pressed }) => (pressed ? styles.pressed : styles.notPressed)}>
      <View style={styles.containerItem}>
        <IconComponent style={imageStyle} name={source} size={sizer} color={colour} />
        <Text style={styles.optionText}>{option}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  containerItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    height: 77,
  },
  pressed: {
    backgroundColor: "#FDECEA",
  },
  notPressed: {
    opacity: 1,
  },
  optionText: {
    fontFamily: "KohSantepheap-Regular",
    fontSize: 24,
    color: "#000",
  },
});

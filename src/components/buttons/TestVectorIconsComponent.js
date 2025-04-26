import { StyleSheet, Pressable, View, Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function VectorImage({ onPress, source, sizer, colour, imageStyle, option, iconLibrary = "Ionicons" }) {
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
      <View style={{ flexDirection: "row", margin: 10 }}>
        <View style={styles.imageContainer}>
          <IconComponent style={imageStyle} name={source} size={sizer} color={colour} />
        </View>
        <Text style={styles.optionText}>{option}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.6,
  },
  notPressed: {
    opacity: 1,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    width: "100%",
    height: 70,
  },
  imageContainer: {
    width: 40,
    height: 40,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    contentFit: "contain",
  },
  optionText: {
    fontFamily: "KohSantepheap-Regular",
    fontSize: 24,
    color: "#000",
    marginLeft: 10,
  },
});

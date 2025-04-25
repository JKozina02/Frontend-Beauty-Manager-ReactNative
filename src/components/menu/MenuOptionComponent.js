import { StyleSheet, Pressable, View, Text } from "react-native";
import { Image } from "expo-image";

export default function MenuOption({ onPress, source, imageStyle, option }) {
  return (
    <Pressable onPress={onPress} style={({ pressed }) => (pressed ? styles.pressed : styles.notPressed)}>
      <View style={styles.container}>
        <Image style={imageStyle} source={source} contentFit="contain" />
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
  optionText: {
    fontFamily: "KohSantepheap-Regular",
    fontSize: 24,
    color: "#000",
    marginLeft: 10,
  },
});

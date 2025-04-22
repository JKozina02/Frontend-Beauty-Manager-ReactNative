import { StyleSheet, Pressable } from "react-native";
import { Image } from "expo-image";

export default function ImageButton({ onPress, source, imageStyle }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => {
        return [pressed ? styles.pressed : styles.notPressed];
      }}
    >
      <Image style={imageStyle} source={source} contetnFit="cover" />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressed: {
    opacity: 0,
  },
  notPressed: {
    opacity: 1,
  },
});

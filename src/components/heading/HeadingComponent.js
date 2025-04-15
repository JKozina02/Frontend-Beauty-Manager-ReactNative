import { Text, StyleSheet } from "react-native";

export const HeadingComponent = ({ children, level = 1, color = "#000000" }) => {
  const stylesMap = {
    1: styles.h1,
    2: styles.h2,
    3: styles.h3,
    4: styles.h4,
  };

  return <Text style={[styles.text, stylesMap[level], { color }]}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontFamily: "KohSantepheap-Bold",
  },
  h1: { fontSize: 35 },
  h2: { fontSize: 30 },
  h3: { fontSize: 25 },
  h4: { fontSize: 20 },
});

import { Image, StyleSheet } from "react-native";

export default function LogoComponent() {
  return <Image source={require("../../../assets/logo.png")} style={styles.logo} />;
}

const styles = StyleSheet.create({
  logo: {
    width: "80%",
    resizeMode: "contain",
  },
});

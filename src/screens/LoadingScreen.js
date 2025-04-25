import { StyleSheet, View } from "react-native";
import CircleComponent from "../components/ui/CircleComponent";
import LogoComponent from "../components/ui/LogoComponent";
import { useNavigation } from "@react-navigation/native";

export const LoadingScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={{ position: "absolute", right: "-80", top: "-65" }}>
        <CircleComponent width="200" height="200" />
      </View>
      <View style={styles.containerLogo}>
        <LogoComponent />
        <View style={{ position: "absolute", left: "-213", top: "233" }}>
          <CircleComponent width="500" height="500" />
        </View>

        <View style={styles.wrapperButtons}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperTitle: {
    gap: 25,
  },

  containerLogo: {
    position: "absolute",
    top: "35%",
    left: 0,
    right: 0,
    alignItems: "center",
  },
  container: {
    flex: 1,
  },
});

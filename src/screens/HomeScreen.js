import { StyleSheet, View } from "react-native";
import CircleComponent from "../components/ui/CircleComponent";
import LogoComponent from "../components/ui/LogoComponent";
import { HeadingComponent } from "../components/heading/HeadingComponent";

export const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={{ position: "absolute", right: "-80", top: "-65" }}>
        <CircleComponent width="200" height="200" />
      </View>
      <LogoComponent />
      <View>
        <HeadingComponent children={"Welcome"} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

import { StyleSheet, View, Image } from "react-native";

import CircleComponent from "../components/ui/CircleComponent";
import { useNavigation } from "@react-navigation/native";
import { CustomButton } from "../components/buttons/CustomButton";

export const NotFoundScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={{ position: "absolute", right: "-80", top: "-65" }}>
        <CircleComponent width="200" height="200" />
      </View>
      <View style={styles.containerLogo}>
        <Image source={require("../../assets/error505.png")} style={styles.logo} />
        <View style={{ position: "absolute", left: "-213", top: "300" }}>
          <CircleComponent width="500" height="500" />
        </View>
        <View style={styles.wrapperButtons}>
          <CustomButton
            onPress={() => navigation.navigate("Home")}
            title="Back to home"
            color={"#FFFAFC"}
            backgroundColor={"#000000"}
          />
        </View>
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
    top: "30%",
    left: 0,
    right: 0,
    alignItems: "center",
  },
  container: {
    flex: 1,
  },
  wrapperButtons: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 15,
    marginTop: 21,
    margin: 20,
  },
  logo: {
    width: 176,
    height: 134,
    resizeMode: "contain",
  },
});

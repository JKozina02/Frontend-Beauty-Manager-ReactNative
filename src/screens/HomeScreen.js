import { StyleSheet, View } from "react-native";
import CircleComponent from "../components/ui/CircleComponent";
import LogoComponent from "../components/ui/LogoComponent";
import { HeadingComponent } from "../components/heading/HeadingComponent";
import { CustomTextComponent } from "../components/customText/CustomTextComponent";
import { CustomButton } from "../components/buttons/CustomButton";
import { useNavigation } from "@react-navigation/native";

export const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={{ position: "absolute", right: "-80", top: "-65" }}>
        <CircleComponent width="200" height="200" />
      </View>
      <View style={styles.containerLogo}>
        <LogoComponent />
      </View>
      <View style={styles.containerWelcomeCard}>
        <View style={styles.wrapperTitle}>
          <HeadingComponent children={"Welcome"} />
          <CustomTextComponent
            children={
              "Welcome to the beautiful manager, here you can choose your favorite service and sign up for it with our beautiful app."
            }
          />
        </View>
        <View style={styles.wrapperButtons}>
          <CustomButton
            onPress={() => navigation.navigate("SignIn")}
            title="Sign In"
            color={"#000000"}
            backgroundColor={"#FFFAFC"}
            style={styles.buttonStyle}
          />
          <CustomButton
            onPress={() => navigation.navigate("SignUp")}
            title="Sign Up"
            color={"#FFFAFC"}
            backgroundColor={"#000000"}
            style={styles.buttonStyle}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    flex: 1,
  },
  wrapperTitle: {
    gap: 25,
  },
  wrapperButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 15,
    marginTop: 40,
  },
  containerWelcomeCard: {
    backgroundColor: "#F7CCC3",
    position: "absolute",
    bottom: 0,
    width: "100%",
    paddingHorizontal: 20,
    paddingTop: 80,
    paddingBottom: 70,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  containerLogo: {
    position: "absolute",
    top: "25%",
    left: 0,
    right: 0,
    alignItems: "center",
  },
  container: {
    flex: 1,
  },
});

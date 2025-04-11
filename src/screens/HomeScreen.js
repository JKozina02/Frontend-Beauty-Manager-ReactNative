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
      <LogoComponent />
      <View style={styles.containerWelcomeCard}>
        <HeadingComponent children={"Welcome"} />
        <CustomTextComponent
          children={
            "Welcome to the beautiful manager, here you can choose your favorite service and sign up for it with our beautiful app."
          }
        />
        <View style={styles.wrapperButtons}>
          <CustomButton
            onPress={() => navigation.navigate("SignIn")}
            title="Sign In"
            color={"#000000"}
            backgroundColor={"#FFFAFC"}
          />
          <CustomButton
            onPress={() => navigation.navigate("SignUp")}
            title="Sign Up"
            color={"#FFFAFC"}
            backgroundColor={"#000000"}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
    padding: 20,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

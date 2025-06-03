import { View, Image, StyleSheet } from "react-native";
import CircleComponent from "../components/ui/CircleComponent";
import { CustomButton } from "../components/buttons/CustomButton";
import { HeadingComponent } from "../components/heading/HeadingComponent";
import { CustomTextComponent } from "../components/customText/CustomTextComponent";
const SuccessfullBookingScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={{ position: "absolute", right: "-80", top: "-65" }}>
        <CircleComponent width="200" height="200" />
      </View>
      <View style={styles.containerLogo}>
        <Image source={require("../../assets/success_icon.png")} style={styles.logo} />
        <View style={{ position: "absolute", left: "-213", top: "300" }}>
          <CircleComponent width="500" height="500" />
        </View>
        <View style={styles.text}>
          <HeadingComponent children={"Successfully booked"} level={3} />
          <CustomTextComponent
            style={{ textAlign: "center" }}
            children={"Thank you for registering, the master will be waiting for you at your appointment"}
          />
        </View>
        <CustomButton
          onPress={() => navigation.pop(3)}
          title="Back to home"
          color={"#FFFAFC"}
          backgroundColor={"#000000"}
          style={{ width: "80%" }}
        />
      </View>
    </View>
  );
};

SuccessfullBookingScreen.displayName = "SuccessfullBookingScreen";

export default SuccessfullBookingScreen;

const styles = StyleSheet.create({
  wrapperTitle: {
    gap: 25,
  },
  text: {
    alignItems: "center",
    paddingHorizontal: 10,
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
    backgroundColor: "#FFFAFC",
  },
  logo: {
    width: 176,
    height: 134,
    resizeMode: "contain",
  },
});

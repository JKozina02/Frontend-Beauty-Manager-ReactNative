import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";
import BackComponent from "../buttons/BackComponent";

export const TopMenuComponent = ({ category }) => {
  return (
    <View style={styles.container}>
      <BackComponent
        onPress={() => console.log("Back")}
        imageStyle={styles.Back}
        source={require("../../../assets/menu/arrow.png")}
      />
      <Text style={styles.Category}> {category} </Text>
      <StatusBar style="auto" />
      <BackComponent
        onPress={() => console.log("Menu")}
        imageStyle={styles.Menu}
        source={require("../../../assets/menu/burger.png")}
      />
    </View>
  );
};

//różowy kontener
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#F7CCC3",
    position: "absolute",
    height: 200,
    width: "100%",
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    padding: 20,
    paddingTop: 30,
  },
  //strzałka back
  Back: {
    width: "40",
    height: "40",
    resizeMode: "contain",
    paddingTop: "80",
  },
  //burger menu
  Menu: {
    width: "40",
    height: "40",
    resizeMode: "contain",
    paddingTop: "60",
    paddingRight: "20",
  },
  //tekst
  Category: {
    fontFamily: "KohSantepheap-Regular",
    fontSize: 22,
    textAlign: "center",
    paddingTop: "20",
  },
});

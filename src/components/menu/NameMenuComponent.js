import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";
import BackComponent from "../buttons/ImageButtonComponent";
import { useDispatch } from "react-redux";
import { openMenu } from "../../store/slices/MenuSlice";

export const NameMenuComponent = ({ userName }) => {
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <View style={styles.nameContainer}>
        <Text style={styles.Bold}>Welcome,</Text>
        <Text style={styles.Name}>{userName}.</Text>
      </View>

      <StatusBar style="auto" />
      <BackComponent
        onPress={() => dispatch(openMenu())}
        imageStyle={styles.Menu}
        source={require("../../../assets/menu/burger.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  //różowy kontener
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#F7CCC3",
    height: 200,
    width: "100%",
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  //kontener na przywitanie
  nameContainer: {
    flexDirection: "column",
    alignItems: "flex-start",
  },
  //styl imienia
  Name: {
    fontFamily: "KohSantepheap-Regular",
    fontSize: 22,
    color: "#000",
    lineHeight: 26,
  },
  //styl witaj
  Bold: {
    fontFamily: "KohSantepheap-Bold",
    fontSize: 26,
    color: "#000",
    lineHeight: 30,
  },
  //burger menu
  Menu: {
    width: 32,
    height: 24,
    resizeMode: "contain",
    paddingTop: "60",
    paddingRight: "20",
  },
});

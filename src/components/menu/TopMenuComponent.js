import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, Pressable } from "react-native";
import BackComponent from "../buttons/ImageButtonComponent";
import { useDispatch } from "react-redux";
import { openMenu } from "../../store/slices/MenuSlice";
import AntDesign from "@expo/vector-icons/AntDesign";

export const TopMenuComponent = ({ category }) => {
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      {/* STRZAŁKA */}
      <Pressable onPress={() => console.log("Back")}>
        <AntDesign name="swapleft" size={50} color="black" style={styles.Back} />
      </Pressable>

      {/* NAZWA KATEGORII */}
      <Text style={styles.Category}> {category} </Text>

      {/* MENU BURGER */}
      <BackComponent
        onPress={() => dispatch(openMenu())}
        imageStyle={styles.Menu}
        source={require("../../../assets/menu/burger.png")}
      />

      <StatusBar style="auto" />
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
    height: 200,
    width: "100%",
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  //strzałka back
  Back: {
    width: 50,
    height: 50,
    paddingTop: 15,
  },
  //burger menu
  Menu: {
    width: "32",
    height: "24",
    resizeMode: "contain",
    paddingTop: "60",
    paddingRight: "20",
  },
  //tekst
  Category: {
    fontFamily: "KohSantepheap-Bold",
    fontSize: 22,
    textAlign: "center",
    paddingTop: "20",
  },
});

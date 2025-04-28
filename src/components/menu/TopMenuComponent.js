import { StyleSheet, View, Text, Pressable } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { PopMenuComponent } from "./PopMenuComponent";
import { useNavigation } from "@react-navigation/native";

export const TopMenuComponent = ({ title }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Pressable onPress={navigation.navigate("MainScreen")} style={styles.sideButton}>
        <AntDesign name="swapleft" size={50} color="black" />
      </Pressable>

      <Text style={styles.title}>{title}</Text>

      <View style={styles.sideButton}>
        <PopMenuComponent userName="Kaczucha" role="Beauty Artist" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#F7CCC3",
    height: 200,
    width: "100%",
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    paddingLeft: 20,
  },
  sideButton: {
    width: 50,
    alignItems: "center",
  },
  title: {
    fontFamily: "KohSantepheap-Bold",
    fontSize: 22,
    textAlign: "center",
    flex: 1,
  },
});

import { useNavigation } from "@react-navigation/native";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { StyleSheet } from "react-native";

export const HeaderFormComponent = ({ tab, onPress }) => {
  const navigation = useNavigation();

  const backAction = () => {
    navigation.goBack();
    return true;
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => backAction()}>
        <Image source={require("../../../assets/arrow.png")} style={styles.backbutton} />
      </TouchableOpacity>
      <TouchableOpacity key={tab} style={[styles.tab]} onPress={onPress}>
        <Text style={[styles.tabText]}>{tab}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#F7CCC3",
    paddingHorizontal: 20,
  },
  tabText: {
    fontFamily: "KohSantepheap-Regular",
    fontSize: 20,
    color: "#000000",
  },
});

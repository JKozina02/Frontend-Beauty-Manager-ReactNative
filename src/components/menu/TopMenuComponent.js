import { StyleSheet, View, Text, Pressable } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { PopMenuComponent } from "./PopMenuComponent";
import { useNavigation } from "@react-navigation/native";
import { SearchBarComponent } from "../searchBar/SearchBarComponent";
import { FiltersButtonComponent } from "../filters/subComponents/FiltersButtonComponent";

export const TopMenuComponent = ({ title, name }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.wrapperHeader}>
        <Pressable onPress={navigation.navigate("MainScreen")} style={styles.sideButton}>
          <AntDesign name="swapleft" size={50} color="black" />
        </Pressable>

        <Text style={styles.title}>{title}</Text>

        <View style={styles.sideButton}>
          <PopMenuComponent userName={name} role="Beauty Client" />
        </View>
      </View>
      <View style={styles.wrapperFilters}>
        <SearchBarComponent />
        <FiltersButtonComponent />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F7CCC3",
    width: "100%",
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    paddingHorizontal: 20,
    paddingTop: 70,
    paddingBottom: 22,
  },
  wrapperHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  wrapperFilters: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 5,
    marginTop: 20,
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

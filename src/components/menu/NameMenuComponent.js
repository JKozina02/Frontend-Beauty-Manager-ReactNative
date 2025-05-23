import { StyleSheet, View, Text } from "react-native";
import { PopMenuComponent } from "./PopMenuComponent";
import { SearchBarComponent } from "../searchBar/SearchBarComponent.js";
import { FiltersButtonComponent } from "../filters/subComponents/FiltersButtonComponent.js";
import { FiltersComponent } from "../filters/FiltersComponent.js";

export const NameMenuComponent = ({ userName }) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapperHeader}>
        <View style={styles.nameContainer}>
          <Text style={styles.bold}>Welcome,</Text>
          <Text style={styles.name}>{userName}</Text>
        </View>
        <View style={styles.sideButton}>
          <PopMenuComponent userName={userName} role="Beauty Client" />
        </View>
      </View>
      <View style={styles.wrapperFilters}>
        <SearchBarComponent />
        <FiltersButtonComponent />
        <FiltersComponent />
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
  },
  wrapperFilters: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 5,
    marginTop: 20,
  },
  nameContainer: {
    flexDirection: "column",
    alignItems: "flex-start",
  },
  name: {
    fontFamily: "KohSantepheap-Regular",
    fontSize: 25,
    color: "#000",
  },
  bold: {
    fontFamily: "KohSantepheap-Bold",
    fontSize: 30,
    color: "#000",
  },
  sideButton: {
    top: 30,
    right: -20,
  },
});

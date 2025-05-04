import { StyleSheet, View, Text } from "react-native";
import { PopMenuComponent } from "./PopMenuComponent";

export const NameMenuComponent = ({ userName }) => {
  return (
    <View style={styles.container}>
      <View style={styles.nameContainer}>
        <Text style={styles.bold}>Welcome,</Text>
        <Text style={styles.name}>{userName}</Text>
      </View>
      <View style={styles.sideButton}>
        <PopMenuComponent userName="Tatiana" role="Beauty Artist" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#F7CCC3",
    height: 200,
    width: "100%",
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    paddingHorizontal: 20,
    paddingTop: 70,
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

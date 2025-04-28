import { StyleSheet, View, Text } from "react-native";

export const NameMenuComponent = ({ userName }) => {
  return (
    <View style={styles.container}>
      <View style={styles.nameContainer}>
        <Text style={styles.Bold}>Welcome,</Text>
        <Text style={styles.Name}>{userName}</Text>
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
    paddingTop: 50,
  },
  nameContainer: {
    flexDirection: "column",
    alignItems: "flex-start",
  },
  Name: {
    fontFamily: "KohSantepheap-Regular",
    fontSize: 22,
    color: "#000",
    lineHeight: 26,
  },
  Bold: {
    fontFamily: "KohSantepheap-Bold",
    fontSize: 26,
    color: "#000",
    lineHeight: 30,
  },
  Menu: {
    width: 32,
    height: 24,
    resizeMode: "contain",
    paddingTop: "60",
    paddingRight: "20",
  },
});

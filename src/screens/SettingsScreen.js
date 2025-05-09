import React from "react";
import { View, Text, Pressable, StyleSheet, Image } from "react-native";

export const SettingsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => navigation.goBack()}>
          <Image source={require("../../assets/arrow.png")} style={styles.backbutton} />
        </Pressable>
        <Text style={styles.headerText}>Settings</Text>
        <View style={{ width: 24 }} />
      </View>
      <Pressable style={styles.selectionBox}>
        <Text style={styles.selectionText}>Wroclaw</Text>
      </Pressable>

      <Pressable style={styles.selectionBox}>
        <Text style={styles.selectionText}>English</Text>
      </Pressable>

      <Pressable style={styles.saveButton}>
        <Text style={styles.saveButtonText}>Save</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 20,
    paddingTop: 57,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 49,
  },
  backbutton: {
    width: 37,
    height: 11,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  selectionBox: {
    backgroundColor: "#F5F5F5",
    padding: 16,
    borderRadius: 15,
    marginBottom: 26,
  },
  selectionText: {
    fontSize: 18,
    marginLeft: 28,
  },
  saveButton: {
    backgroundColor: "black",
    padding: 16,
    borderRadius: 15,
    alignItems: "center",
    marginTop: 20,
  },
  saveButtonText: {
    color: "#FFFFFF",
    fontSize: 22,
  },
});

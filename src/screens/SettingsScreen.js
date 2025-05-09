import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

export const SettingsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
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
    paddingTop: 40,
  },
  selectionBox: {
    backgroundColor: "#F5F5F5",
    padding: 16,
    borderRadius: 15,
    marginBottom: 26,
  },
  selectionText: {
    fontSize: 18,
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

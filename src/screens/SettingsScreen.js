import React, { useState } from "react";
import { View, Text, Pressable, StyleSheet, Modal, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import i18n from "i18next";
import { useTranslation } from "react-i18next";
import { useRoute } from "@react-navigation/native";

export const SettingsScreen = () => {
  const { t } = useTranslation();
  const navigation = useNavigation();
  const [languageModalVisible, setLanguageModalVisible] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);
  const route = useRoute();
  const selectedCity = route.params?.selectedCity || "Wybierz miasto";
  const handleCityPress = () => {
    navigation.navigate("CitySelectionScreen");
  };

  const handleLanguagePress = (lang) => {
    setSelectedLanguage(lang);
    i18n.changeLanguage(lang);
    setLanguageModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => navigation.goBack()}>
          <Image source={require("../../assets/arrow.png")} style={styles.backArrow} />
        </Pressable>
        <Text style={styles.headerText}>{t("settings")}</Text>
        <View style={{ width: 24 }} />
      </View>

      <Pressable style={styles.selectionBox} onPress={handleCityPress}>
        <Text style={styles.selectionText}>{selectedCity}</Text>
        <Image source={require("../../assets/arrowUp.png")} style={styles.arrowIcon} />
      </Pressable>

      <Pressable style={styles.selectionBox} onPress={() => setLanguageModalVisible(true)}>
        <Text style={styles.selectionText}>
          {selectedLanguage === "en" ? "English" : selectedLanguage === "pl" ? "Polski" : "Русский"}
        </Text>
        <Image source={require("../../assets/arrowUp.png")} style={styles.arrowIcon} />
      </Pressable>

      <Pressable style={styles.saveButton}>
        <Text style={styles.saveButtonText}>{t("save")}</Text>
      </Pressable>

      <Modal visible={languageModalVisible} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            {["en", "pl", "ru"].map((lang) => (
              <TouchableOpacity
                key={lang}
                onPress={() => handleLanguagePress(lang)}
                style={[styles.modalItem, lang === selectedLanguage ? styles.enabledLang : styles.disabledLang]}
              >
                <Text
                  style={{
                    color: lang === selectedLanguage ? "black" : "gray",
                  }}
                >
                  {lang === "en" ? "English" : lang === "pl" ? "Polski" : "Русский"}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </Modal>
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
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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
  arrowIcon: {
    width: 18,
    height: 18,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.3)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    width: "80%",
  },
  modalItem: {
    paddingVertical: 10,
  },
  enabledLang: {
    opacity: 1,
  },
  disabledLang: {
    opacity: 0.5,
  },
});

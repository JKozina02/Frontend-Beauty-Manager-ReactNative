import { useState } from "react";
import { View, Text, Pressable, StyleSheet, Modal, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import i18n from "i18next";
import { useTranslation } from "react-i18next";
import { useRoute } from "@react-navigation/native";
import { CustomButton } from "../components/buttons/CustomButton";
import { HeadingComponent } from "../components/heading/HeadingComponent";
import { AntDesign } from "@expo/vector-icons";

export const SettingsScreen = () => {
  const { t } = useTranslation();
  const navigation = useNavigation();
  const [languageModalVisible, setLanguageModalVisible] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);
  const route = useRoute();
  const selectedCity = route.params?.selectedCity || "Wroclaw";
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
          <AntDesign name="swapleft" size={50} color="black" />
        </Pressable>
        <HeadingComponent level={3} color="#000000" children={t("Settings")} />
        <View style={{ width: 45 }} />
      </View>

      <Pressable style={styles.selectionBox} onPress={handleCityPress}>
        <Text style={styles.selectionText}>{selectedCity}</Text>
        <AntDesign name="arrowleft" size={24} color="black" style={styles.icon} />
      </Pressable>

      <Pressable style={styles.selectionBox} onPress={() => setLanguageModalVisible(true)}>
        <Text style={styles.selectionText}>
          {selectedLanguage === "en" ? "English" : selectedLanguage === "pl" ? "Polski" : "Русский"}
        </Text>
        <AntDesign name="arrowleft" size={24} color="black" style={styles.icon} />
      </Pressable>
      <CustomButton onPress={""} title={t("Save")} backgroundColor="#000000" color={"#FFFAFC"} />

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
                    fontFamily: "KohSantepheap-Regular",
                    fontSize: 18,
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
    backgroundColor: "#FFFAFC",
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 49,
  },
  headerText: {
    fontSize: 24,
    fontFamily: "KohSantepheap-Bold",
  },
  icon: {
    transform: [{ rotate: "120deg" }],
  },
  selectionBox: {
    backgroundColor: "#F5F5F5",
    paddingVertical: 20,
    paddingHorizontal: 28,
    borderRadius: 15,
    marginBottom: 26,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  selectionText: {
    fontFamily: "KohSantepheap-Regular",
    fontSize: 18,
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

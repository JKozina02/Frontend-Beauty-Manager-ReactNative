import { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  ActivityIndicator,
  Pressable,
} from "react-native";
import { CustomTextComponent } from "../components/customText/CustomTextComponent";
import { HeadingComponent } from "../components/heading/HeadingComponent";
import { useTranslation } from "react-i18next";
import { AntDesign } from "@expo/vector-icons";

const CitySelectionScreen = ({ navigation }) => {
  const [cities, setCities] = useState([]);
  const [filteredCities, setFilteredCities] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(true);
  const { t } = useTranslation();

  useEffect(() => {
    fetchCities();
  }, []);

  const fetchCities = async () => {
    try {
      const response = await fetch(
        "http://api.geonames.org/searchJSON?country=PL&featureClass=P&maxRows=1000&username=natalia777"
      );
      const data = await response.json();
      const cityList = data.geonames.map((item) => ({
        id: item.geonameId,
        name: item.name,
      }));
      setCities(cityList);
      setFilteredCities(cityList);
    } catch (error) {
      console.error("Błąd ładowania miast:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (text) => {
    setSearchText(text);
    const filtered = cities.filter((city) => city.name.toLowerCase().includes(text.toLowerCase()));
    setFilteredCities(filtered);
  };

  const handleCitySelect = (city) => {
    navigation.navigate("SettingsScreen", { selectedCity: city.name });
  };

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" />
        <CustomTextComponent>Loading cities</CustomTextComponent>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => navigation.goBack()}>
          <AntDesign name="swapleft" size={50} color="black" />
        </Pressable>
        <HeadingComponent level={3} color="#000000" children={t("Cities")} />
        <View style={{ width: 45 }} />
      </View>
      <TextInput
        style={styles.searchInput}
        placeholder="Search city..."
        placeholderTextColor="#888"
        value={searchText}
        onChangeText={handleSearch}
      />
      <FlatList
        data={filteredCities}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleCitySelect(item)}>
            <Text style={styles.cityItem}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default CitySelectionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#FFFAFC",
    paddingTop: 57,
    paddingHorizontal: 20,
  },
  searchInput: {
    height: 50,
    paddingHorizontal: 10,
    borderColor: "#F7CCC3",
    borderWidth: 1,
    marginBottom: 16,
    borderRadius: 10,
    fontFamily: "KohSantepheap-Regular",
    fontSize: 18,
  },
  cityItem: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#EAE9E9",
    fontSize: 16,
  },
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 49,
  },
});

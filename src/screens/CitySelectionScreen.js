import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  ActivityIndicator,
  Pressable,
  Image,
} from "react-native";
import { CustomTextComponent } from "../components/customText/CustomTextComponent";

const CitySelectionScreen = ({ navigation }) => {
  const [cities, setCities] = useState([]);
  const [filteredCities, setFilteredCities] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(true);

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
        <CustomTextComponent>Ładowanie miast...</CustomTextComponent>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => navigation.goBack()}>
          <Image source={require("../../assets/arrow.png")} style={styles.backArrow} />
        </Pressable>
        <Text style={styles.headerText}>Cities</Text>
        <View style={{ width: 24 }} />
      </View>
      <TextInput
        style={styles.searchInput}
        placeholder="Szukaj miasta..."
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
    backgroundColor: "#FFFFFF",
    paddingTop: 57,
    paddingHorizontal: 20,
  },
  searchInput: {
    height: 50,
    borderColor: "#F7CCC3",
    borderWidth: 1,
    paddingHorizontal: 8,
    marginBottom: 16,
    borderRadius: 15,
  },
  cityItem: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
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
  backArrow: {
    width: 37,
    height: 11,
  },
  headerText: {
    fontSize: 25,
    fontWeight: "bold",
  },
});

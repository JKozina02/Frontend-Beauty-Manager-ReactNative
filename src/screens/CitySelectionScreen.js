import React, { useState, useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet, TextInput, ActivityIndicator } from "react-native";

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
        <Text>Ładowanie miast...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
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
  },
  searchInput: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    paddingHorizontal: 8,
    marginBottom: 16,
    borderRadius: 8,
  },
  cityItem: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

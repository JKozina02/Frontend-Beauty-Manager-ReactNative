import { NameMenuComponent } from "../components/menu/NameMenuComponent";
import { ActivityIndicator, StyleSheet, Text, View, ScrollView } from "react-native";
import CategoriesList from "../components/ui/CategoriesList";
import { useSelector } from "react-redux";
import { selectAuth } from "../store/slices/auth.slice";
import { SalonsList } from "../components/salonsList/SalonsList";
import { useGetServicesQuery } from "../store/services/productsApi";
import { useNavigation } from "@react-navigation/native";

export const MainScreen = () => {
  const { name } = useSelector(selectAuth);
  const { data, isLoading, error } = useGetServicesQuery();
  const navigation = useNavigation();
  if (isLoading) return <ActivityIndicator size="large" color="#0000ff" />;
  if (error) return <Text>Error: {error.message}</Text>;

  const salons = data?.salonsList || [];

  const firstFiveSalons = salons.slice(0, 5);

  const handleViewAllPress = () => {
    navigation.navigate("CategoryScreen", { categoryId: "2", categoryName: "nails" });
  };

  return (
    <View style={styles.container}>
      <NameMenuComponent userName={name} />
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <CategoriesList />
        <SalonsList data={firstFiveSalons} title="Recommended" onPress={handleViewAllPress} tab={"View all"} />
        <SalonsList data={firstFiveSalons} title="Nails" onPress={handleViewAllPress} tab={"View all"} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFAFC",
  },
  scrollViewContent: {
    paddingBottom: 100,
  },
});

import { NameMenuComponent } from "../components/menu/NameMenuComponent";
import { ActivityIndicator, StyleSheet, Text, View, ScrollView, FlatList } from "react-native";
import CategoriesList from "../components/ui/CategoriesList";
import { useSelector } from "react-redux";
import { selectAuth } from "../store/slices/auth.slice";
import { SalonsList } from "../components/salonsList/SalonsList";
import { useGetServicesQuery } from "../store/services/productsApi";
import { useNavigation } from "@react-navigation/native";
import { selectSearchQuery } from "../store/slices/searchSlice";
import ProductComponent from "../components/ui/ProductComponent";
import { HeadingComponent } from "../components/heading/HeadingComponent";

export const MainScreen = () => {
  const { name } = useSelector(selectAuth);
  const { data, isLoading, error } = useGetServicesQuery();
  const navigation = useNavigation();
  const query = useSelector(selectSearchQuery);

  if (isLoading) return <ActivityIndicator size="large" color="#0000ff" />;
  if (error) return <Text>Error: {error.message}</Text>;

  const salons = data?.salonsList || [];
  const filteredSalons = salons.filter((salon) => salon.title.toLowerCase().includes(query.toLowerCase()));
  const firstFiveSalons = salons.slice(0, 5);

  const handleViewAllPress = () => {
    navigation.navigate("CategoryScreen", { categoryId: "2", categoryName: "nails" });
  };

  const salonCount = filteredSalons.length;

  return (
    <View style={styles.container}>
      <NameMenuComponent userName={name} />
      {query ? (
        <ScrollView contentContainerStyle={styles.scrollViewResults}>
          <HeadingComponent level={3} color="#000000" children={`${query} - ${salonCount}`} />

          <FlatList
            data={filteredSalons}
            keyExtractor={(item) => item.salonId}
            renderItem={({ item }) => (
              <ProductComponent
                id={item.salonId}
                image={item.image}
                name={item.title}
                address={item.description}
                rating={item.rating || 3.5}
              />
            )}
            numColumns={2}
            columnWrapperStyle={styles.row}
            contentContainerStyle={styles.listContent}
            ListEmptyComponent={<Text style={styles.emptyText}>No salons found.</Text>}
          />
        </ScrollView>
      ) : (
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <CategoriesList />
          <SalonsList data={firstFiveSalons} title="Recommended" onPress={handleViewAllPress} tab={"View all"} />
          <SalonsList data={firstFiveSalons} title="Nails" onPress={handleViewAllPress} tab={"View all"} />
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFAFC",
  },
  listContent: {
    marginTop: 20,
    gap: 20,
  },
  scrollViewResults: {
    marginTop: 20,
    marginHorizontal: 15,
  },
  row: {
    justifyContent: "space-between",
  },
  scrollViewContent: {
    paddingBottom: 100,
  },
});

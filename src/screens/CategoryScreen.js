import { ActivityIndicator, FlatList, StyleSheet, Text } from "react-native";
import ProductComponent from "../components/ui/ProductComponent";
import { useRoute } from "@react-navigation/native";
import { View, ScrollView } from "react-native";
import { TopMenuComponent } from "../components/menu/TopMenuComponent";
import { useSelector } from "react-redux";
import { selectAuth } from "../store/slices/auth.slice";
import { useGetServicesQuery } from "../store/services/productsApi";
import { HeadingComponent } from "../components/heading/HeadingComponent";

const CategoryScreen = () => {
  const { name } = useSelector(selectAuth);

  const route = useRoute();
  const { categoryId, categoryName } = route.params;

  const { data, isLoading, error } = useGetServicesQuery();

  if (isLoading) return <ActivityIndicator size="large" color="#F7CCC3" />;
  if (error) return <Text>Error: {error.message}</Text>;

  const salons = data?.salonsList || [];

  const categoryMap = {
    1: "eyelashes",
    2: "nails",
    3: "eyebrows",
    4: "makeup",
  };

  const mappedCategory = categoryMap[categoryId?.trim().toLowerCase()] || "";

  const filteredSalons = salons.filter((salon) =>
    salon.categories.some((category) => category.trim().toLowerCase() === mappedCategory)
  );

  const salonCount = filteredSalons.length;

  return (
    <View style={styles.container}>
      <TopMenuComponent title={categoryName} name={name} />
      <ScrollView contentContainerStyle={styles.scrollView}>
        <HeadingComponent level={3} color="#000000" children={`${categoryName} - ${salonCount}`} />
        {filteredSalons.length > 0 ? (
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
          />
        ) : (
          <Text style={styles.emptyText}>No salons found for this category.</Text>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFAFC",
  },
  scrollView: {
    marginTop: 20,
    gap: 20,
    paddingHorizontal: 10,
  },
  listContent: {
    marginTop: 20,
    gap: 20,
  },
  row: {
    justifyContent: "space-between",
  },
});

export default CategoryScreen;

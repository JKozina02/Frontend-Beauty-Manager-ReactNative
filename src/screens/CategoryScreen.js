import { ActivityIndicator, FlatList, StyleSheet, Text } from "react-native";
import ProductComponent from "../components/ui/ProductComponent";
import { useRoute } from "@react-navigation/native";
import { View } from "react-native";
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
    <View contentContainerStyle={styles.container}>
      <TopMenuComponent title={categoryName} name={name} />
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
              rating={item.rating || 0}
            />
          )}
        />
      ) : (
        <Text style={styles.emptyText}>No salons found for this category.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 90,
  },
});

export default CategoryScreen;

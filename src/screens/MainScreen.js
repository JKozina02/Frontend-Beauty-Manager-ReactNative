import { NameMenuComponent } from "../components/menu/NameMenuComponent";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import CategoriesList from "../components/ui/CategoriesList";
import { useSelector } from "react-redux";
import { selectAuth } from "../store/slices/auth.slice";
import { SalonsList } from "../components/salonsList/SalonsList";
import { useGetServicesQuery } from "../store/services/productsApi";

export const MainScreen = () => {
  const { name } = useSelector(selectAuth);
 const { data, isLoading, error } = useGetServicesQuery();

  if (isLoading) return <ActivityIndicator size="large" color="#0000ff" />;
  if (error) return <Text>Error: {error.message}</Text>;

  const salons = data?.salonsList || [];

  const firstFiveSalons = salons.slice(0, 5);

  return (
    <View style={styles.constainer}>
      <View style={styles.wrapperHeader}>
        <NameMenuComponent userName={name} />
      </View>
      <CategoriesList />
      <SalonsList data={firstFiveSalons} title="Recommended" onPress={console.log('click button')} tab={'View all'}/>
    </View>
  );
};

const styles = StyleSheet.create({
  constainer: {
  backgroundColor: "#FFFAFC",
  },
  wrapperHeader: {},
  sideButton: {},
});

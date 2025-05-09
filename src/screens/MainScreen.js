import { NameMenuComponent } from "../components/menu/NameMenuComponent";
import { StyleSheet, View } from "react-native";
import CategoriesList from "../components/ui/CategoriesList";

export const MainScreen = () => {
  return (
    <View style={styles.constainer}>
      <View style={styles.wrapperHeader}>
        <NameMenuComponent userName="Tatiana" />
      </View>
      <CategoriesList />
    </View>
  );
};

const styles = StyleSheet.create({
  constainer: {},
  wrapperHeader: {},
  sideButton: {},
});

import { NameMenuComponent } from "../components/menu/NameMenuComponent";
import { StyleSheet, View } from "react-native";
import CategoriesList from "../components/ui/CategoriesList";
import { useSelector } from "react-redux";
import { selectAuth } from "../store/slices/auth.slice";

export const MainScreen = () => {
  const { name } = useSelector(selectAuth);

  return (
    <View style={styles.constainer}>
      <View style={styles.wrapperHeader}>
        <NameMenuComponent userName={name} />
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

import { NameMenuComponent } from "../components/menu/NameMenuComponent";
import { StyleSheet, View } from "react-native";

export const MainScreen = () => {
  return (
    <View style={styles.constainer}>
      <View style={styles.wrapperHeader}>
        <NameMenuComponent userName="Tatiana" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  constainer: {},
  wrapperHeader: {},
  sideButton: {},
});

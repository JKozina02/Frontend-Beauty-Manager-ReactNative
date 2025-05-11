import { Modal, View, StyleSheet, ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { hideModal } from "../../store/slices/filter.slice";
import { FiltersHeaderComponent } from "./subComponents/FiltersHeaderComponent";
import { FiltersCategoryComponent } from "./subComponents/FiltersCategoryComponent";
import { FiltersPriceRangeComponent } from "./subComponents/FiltersPriceRangeComponent";
import { FiltersCallendarComponent } from "./subComponents/FiltersCallendarComponent";
import { HeadingComponent } from "../heading/HeadingComponent";
import { CustomButton } from "../buttons/CustomButton";

export const FiltersComponent = () => {
  const dispatch = useDispatch();
  const isFiltersVisible = useSelector((state) => state.filter.isFiltersVisible);

  return (
    <Modal
      animationType="fade"
      transparent={false}
      visible={isFiltersVisible}
      onRequestClose={() => dispatch(hideModal())}
    >
      <View style={styles.container}>
        <FiltersHeaderComponent />
        <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
          <HeadingComponent level={4} children={"Category"} />
          <FiltersCategoryComponent />
          <HeadingComponent level={4} children={"Price Range"} />
          <FiltersPriceRangeComponent />
          <HeadingComponent level={4} children={"Date"} />
          <FiltersCallendarComponent />
        </ScrollView>
        <CustomButton
          title={"Save"}
          color={"#FFFAFC"}
          backgroundColor={"#000000"}
          onPress={() => dispatch(hideModal())}
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    padding: 15,
    justifyContent: "space-between",
  },
  icon: {
    height: 30,
    width: 30,
  },
});

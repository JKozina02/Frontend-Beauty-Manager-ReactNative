import { Modal, View, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { hideModal, setDates } from "../../store/slices/filter.slice";
import { FiltersHeaderComponent } from "./subComponents/FiltersHeaderComponent";
import { FiltersCategoryComponent } from "./subComponents/FiltersCategoryComponent";
import { FiltersPriceRangeComponent } from "./subComponents/FiltersPriceRangeComponent";
import { CallendarComponent } from "../callendar/CallendarComponent";
import { HeadingComponent } from "../heading/HeadingComponent";
import { CustomButton } from "../buttons/CustomButton";

export const FiltersComponent = () => {
  const dispatch = useDispatch();
  const isFiltersVisible = useSelector((state) => state.filter.isFiltersVisible);
  const selectedDates = useSelector((state) => state.filter.filters.dates);
  console.log("Filters visible:", isFiltersVisible);

  return (
    <Modal
      animationType="fade"
      transparent={false}
      visible={isFiltersVisible}
      onRequestClose={() => dispatch(hideModal())}
    >
      <View style={styles.container}>
        <FiltersHeaderComponent />
        <HeadingComponent level={4} children={"Category"} />
        <FiltersCategoryComponent />
        <HeadingComponent level={4} children={"Price Range"} />
        <FiltersPriceRangeComponent />
        <HeadingComponent level={4} children={"Date"} />
        <CallendarComponent multiple selectedDates={selectedDates} onChange={(dates) => dispatch(setDates(dates))} />
      </View>
      <CustomButton title="Save" color={"#FFFAFC"} backgroundColor={"#000000"} onPress={dispatch(hideModal())} />
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

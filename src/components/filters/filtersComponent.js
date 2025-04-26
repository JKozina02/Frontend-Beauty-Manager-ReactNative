import { Modal, View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { hideModal } from "../../store/slices/filterSlice";
import { FiltersHeaderComponent } from "./subComponents/FiltersHeaderComponent";
import { FiltersCategoryComponent } from "./subComponents/FiltersCategoryComponent";
import { FiltersPriceRangeComponent } from "./subComponents/FiltersPriceRangeComponent";
import { FilterCallendarComponent } from "./subComponents/FiltersCallendarComponent";
import { HeadingComponent } from "../heading/HeadingComponent";

export const FilterComponent = () => {
  const dispatch = useDispatch();
  const isFiltersVisible = useSelector((state) => state.filter.isFiltersVisible);
  //TODO IMPLEMENT SAVE
  return (
    <Modal
      animationType="fade"
      transparent={false}
      visible={isFiltersVisible}
      onRequestClose={() => dispatch(hideModal())}
    >
      <View style={styles.container}>
        <FiltersHeaderComponent />
        <HeadingComponent level="4" children={"Category"} />
        <FiltersCategoryComponent />
        <HeadingComponent level="4" children={"Price Range"} />
        <FiltersPriceRangeComponent />
        <HeadingComponent level="4" children={"Date"} />
        <FilterCallendarComponent />
        <TouchableOpacity style={styles.button} onPress={() => dispatch(hideModal())}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    padding: 15,
    justifyContent: "space-between--",
  },
  button: {
    backgroundColor: "#000000",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  buttonText: {
    fontFamily: "KohSantepheap-Regular",
    color: "#ffffff",
    fontSize: 16,
  },
  icon: {
    height: 30,
    width: 30,
  },
  category: {
    marginTop: 5,
    marginBottom: 5,
  },
});

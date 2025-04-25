import { Modal, View, StyleSheet, Pressable, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { hideModal } from "../../store/slices/filterSlice";
import FiltersHeaderComponent from "./subComponents/FiltersHeaderComponent";
import FiltersCategoryComponent from "./subComponents/FiltersCategoryComponent";
import FiltersPriceRangeComponent from "./subComponents/FiltersPriceRangeComponent";
import FilterCallendarComponent from "./subComponents/FiltersCallendarComponent";

export default FilterComponent = () => {
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
        <FiltersHeaderComponent/>
        <Text style={styles.filterText}>Category</Text>
        <FiltersCategoryComponent/>
        <Text style={styles.filterText}>Price Range</Text>
        <FiltersPriceRangeComponent/>
        <Text style={styles.filterText}>Date</Text>
        <FilterCallendarComponent/>
        <Pressable style={styles.button} onPress={() => dispatch(hideModal())}>
          <Text style={styles.buttonText}>Save</Text>
        </Pressable>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    padding: 20,
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
  filterText: {
    fontFamily: "KohSantepheap-Bold",
    fontSize: 20,
    marginBottom: 8,
  },
  icon: {
    height: 30,
    width: 30,
  },
});

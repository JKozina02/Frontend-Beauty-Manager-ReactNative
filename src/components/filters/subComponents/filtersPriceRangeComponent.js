import { View, StyleSheet, Text } from "react-native";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPriceRange } from "../../../store/slices/filterSlice";
import Slider from "@react-native-community/slider";

export const FiltersPriceRangeComponent = () => {
  const globalPriceRange = useSelector((state) => state.filter.filters.priceRange);
  const dispatch = useDispatch();
  const [sliderValue, setSliderValue] = useState(globalPriceRange[1]);

  useEffect(() => {
    setSliderValue(globalPriceRange[1]);
  }, [globalPriceRange]);
  return (
    <View>
      <View style={styles.sliderNumbers}>
        <Text style={{ fontFamily: "KohSantepheap-Regular" }}>0</Text>
        <Text style={{ fontFamily: "KohSantepheap-Regular" }}>{sliderValue}</Text>
      </View>
      <Slider
        style={styles.slider}
        step={25}
        minimumTrackTintColor="#F7CCC3"
        maximumTrackTintColor="#CCCCCC"
        thumbTintColor="#f8bdb1"
        minimumValue={25}
        maximumValue={2500}
        value={sliderValue}
        onValueChange={(value) => setSliderValue(value)}
        onSlidingComplete={(value) => dispatch(setPriceRange([0, value]))}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
  },
  sliderNumbers: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  slider: {
    marginHorizontal: 25,
  },
});

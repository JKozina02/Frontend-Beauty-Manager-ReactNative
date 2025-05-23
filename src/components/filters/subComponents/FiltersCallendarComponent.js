import { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useDispatch, useSelector } from "react-redux";
import { addDate, removeDate } from "../../../store/slices/filter.slice";
import { daysOfWeek, getDaysInMonth, getFirstDayOfMonth } from "../../../utils/callendar/callendarUtils";

export const FiltersCallendarComponent = () => {
  const currentDate = new Date();
  const [month, setMonth] = useState(currentDate.getMonth());
  const [year, setYear] = useState(currentDate.getFullYear());
  const dispatch = useDispatch();
  const selectedDates = useSelector((state) => state.filter.filters.dates);

  const toggleDate = (day) => {
    const date = `${year}-${month + 1}-${day}`;
    if (selectedDates.includes(date)) {
      dispatch(removeDate(date));
    } else {
      dispatch(addDate(date));
    }
  };

  const renderDays = () => {
    let all = 0;
    const daysInMonth = getDaysInMonth(month, year);
    const firstDay = getFirstDayOfMonth(month, year);
    const days = [];

    for (let i = 0; i < firstDay; i++) {
      all++;
      days.push(<View key={`empty-${i}`} style={styles.emptyDay}></View>);
    }

    for (let i = 1; i <= daysInMonth; i++) {
      const date = `${year}-${month + 1}-${i}`;
      const isSelected = selectedDates.includes(date);
      all++;
      days.push(
        <TouchableOpacity key={i} style={[styles.day, isSelected && styles.selectedDay]} onPress={() => toggleDate(i)}>
          <Text style={styles.dayText}>{i}</Text>
        </TouchableOpacity>
      );
    }

    for (let i = all; i < 42; i++) {
      days.push(<View key={`empty-${i}`} style={styles.emptyDay}></View>);
    }

    return days;
  };

  const handlePrevMonth = () => {
    if (month === 0) {
      setMonth(11);
      setYear(year - 1);
    } else {
      setMonth(month - 1);
    }
  };

  const handleNextMonth = () => {
    if (month === 11) {
      setMonth(0);
      setYear(year + 1);
    } else {
      setMonth(month + 1);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.callendar}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handlePrevMonth}>
            <AntDesign name="caretleft" color={"#F7CCC3"} style={styles.icon} />
          </TouchableOpacity>
          <Text style={styles.callendarMonth}>
            {new Date(year, month).toLocaleString("en-US", { month: "long" })} {year}
          </Text>
          <TouchableOpacity onPress={handleNextMonth}>
            <AntDesign name="caretright" color={"#F7CCC3"} style={styles.icon} />
          </TouchableOpacity>
        </View>
        <View style={styles.weekdays}>
          {daysOfWeek.map((day, index) => (
            <Text key={index} style={styles.weekday}>
              {day}
            </Text>
          ))}
        </View>
        <View style={styles.days}>{renderDays()}</View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 20,
  },
  callendar: {
    padding: 30,
    width: "90%",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#F7CCC3",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: 26,
  },
  callendarMonth: {
    fontFamily: "KohSantepheap-Bold",
    fontSize: 18,
  },
  weekdays: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  weekday: {
    flex: 1,
    textAlign: "center",
    fontFamily: "KohSantepheap-Bold",
    color: "#898DA9",
  },
  days: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  day: {
    width: "13%",
    height: "13%",
    aspectRatio: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
    borderRadius: 100,
  },
  selectedDay: {
    backgroundColor: "#F7CCC3",
  },
  dayText: {
    fontSize: 16,
  },
  emptyDay: {
    width: "13%",
    height: "13%",
    aspectRatio: 1,
    marginBottom: 8,
  },
});

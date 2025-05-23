import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import { useRoute } from "@react-navigation/native";
import { HeadingComponent } from "../components/heading/HeadingComponent";
import { CallendarComponent } from "../components/callendar/CallendarComponent";
import HourButton from "../components/buttons/HourButton";
const BookingServiceScreen = () => {
  const route = useRoute();
  const { serviceId, serviceName } = route.params || {};
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedHour, setSelectedHour] = useState(null);

  useEffect(() => {});

  return (
    <View style={styles.container}>
      <View style={styles.navigation}>
        <HeadingComponent children={"Book a visit"} level={3} />
      </View>
      <ScrollView style={styles.content}>
        <View style={styles.header}>
          <HeadingComponent children={serviceName} level={3} />
        </View>
        <CallendarComponent selectedDate={selectedDate} onChange={setSelectedDate} />
        <View style={styles.hourAvailable}>
          <HourButton text={"9:00"} />
          <HourButton text={"12:00"} />
          <HourButton text={"15:00"} />
        </View>
        <View style={styles.summary}>
          <View style={styles.summary - left}></View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7CCC3",
  },
  navigation: {
    width: "100%",
    marginVertical: 50,
    alignItems: "center",
  },
  header: {
    marginTop: 20,
    margin: 10,
  },
  content: {
    flex: 1,
    width: "100%",
    backgroundColor: "#FFFAFC",
    borderRadius: 30,
    padding: 10,
  },
  hourAvailable: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    padding: 15,
    gap: 10,
  },
  summary: {},
});

export default BookingServiceScreen;

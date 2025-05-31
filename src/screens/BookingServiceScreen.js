import { useState, useEffect } from "react";
import { View, StyleSheet, ScrollView, ActivityIndicator, Text, TouchableOpacity } from "react-native";
import { useRoute } from "@react-navigation/native";
import { HeadingComponent } from "../components/heading/HeadingComponent";
import { CallendarComponent } from "../components/callendar/CallendarComponent";
import HourButton from "../components/buttons/HourButton";
import { useGetServiceByIdQuery } from "../store/services/productsApi";
import { formatDate } from "../utils/callendar/callendarUtils";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { CustomButton } from "../components/buttons/CustomButton";

const BookingServiceScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { salonId, serviceId } = route.params || {};
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedHour, setSelectedHour] = useState(null);

  const { data: service, isLoading, error } = useGetServiceByIdQuery({ salonId, serviceId });
  const selectedSlot =
    selectedHour && service?.slots ? service.slots.find((slot) => slot.slotId === selectedHour) : null;

  function formatDateToPL(dateStr) {
    if (!dateStr) return "";
    const [year, month, day] = dateStr.split("-");
    return `${day}.${month}.${year}`;
  }
  useEffect(() => {
    setSelectedHour(null);
  }, [selectedDate]);

  if (isLoading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }
  if (error || !service) {
    return <Text style={{ color: "red" }}>Błąd ładowania szczegółów usługi.</Text>;
  }
  return (
    <View style={styles.container}>
      <View style={styles.navigation}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="swapleft" size={50} color="black" />
        </TouchableOpacity>
        <HeadingComponent children={"Book a visit"} level={3} />
        <View style={styles.navigation_right} />
      </View>
      <ScrollView style={styles.content}>
        <View style={styles.header}>
          <HeadingComponent children={service.title} level={3} />
        </View>
        <CallendarComponent selectedDate={selectedDate} onChange={setSelectedDate} />
        <View style={styles.hourAvailable}>
          {service.slots && service.slots.length > 0 ? (
            service.slots
              .filter((slot) => selectedDate && slot.date === formatDate(selectedDate))
              .map((slot) => (
                <HourButton
                  key={slot.slotId}
                  text={slot.start_time}
                  selected={selectedHour === slot.slotId}
                  disabled={!slot.is_available}
                  onPress={() => setSelectedHour(slot.slotId)}
                />
              ))
          ) : (
            <View>
              <Text>No available slots</Text>
            </View>
          )}
        </View>
        <View style={styles.summary}>
          <View style={styles.summaryLeft}>
            <Text style={styles.serviceName}>{service.title}</Text>
            <Text style={styles.date}>
              {formatDateToPL(formatDate(selectedDate))}
              {selectedSlot ? ` - ${selectedSlot.start_time}` : ""}
            </Text>
          </View>
          <Text style={styles.price}>{service.price}zł</Text>
        </View>
        <CustomButton
          title="Booking"
          color={"#FFFAFC"}
          backgroundColor={"#000000"}
          onPress={() => navigation.navigate("SuccessFullBookingScreen")}
        />
      </ScrollView>
    </View>
  );
};

BookingServiceScreen.displayName = "BookingServiceScreen";

export default BookingServiceScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7CCC3",
  },
  navigation: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 50,
    marginHorizontal: 20,
  },
  navigation_right: {
    width: 50,
  },
  header: {
    marginTop: 20,
  },
  content: {
    flex: 1,
    width: "100%",
    backgroundColor: "#FFFAFC",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 15,
  },
  hourAvailable: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    padding: 15,
    gap: 10,
    minHeight: 70,
  },
  summary: {
    flex: 1,
    width: "100%",
    backgroundColor: "rgba(247, 204, 195, 0.40)",
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  summaryLeft: {
    flex: 1,
    flexDirection: "column",
  },
  serviceName: {
    fontFamily: "KohSantepheap-Regular",
    color: "#000000",
    fontSize: 20,
  },
  date: {
    fontFamily: "KohSantepheap-Regular",
    color: "#7B7B7B",
    fontSize: 12,
  },
  price: {
    fontFamily: "KohSantepheap-Bold",
    fontSize: 20,
  },
});

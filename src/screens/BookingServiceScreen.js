import React, { useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import { useRoute } from "@react-navigation/native";
import { HeadingComponent } from "../components/heading/HeadingComponent";
const BookingServiceScreen = () => {
  const route = useRoute();
  const { serviceId, serviceName } = route.params || {};

  useEffect(() => {});

  return (
    <View style={styles.container}>
      <View style={styles.navigation}>
        <HeadingComponent children={"Book a visit"} level={3} />
      </View>
      <View style={styles.content}>
        <View style={styles.header}>
          <HeadingComponent children={serviceName} level={2} />
        </View>
        <Text>Content</Text>
      </View>
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
    margin: 10,
    marginVertical: 50,
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
  },
});

export default BookingServiceScreen;

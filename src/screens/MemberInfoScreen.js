import { View, Text, StyleSheet, Image, ScrollView, Pressable, Linking } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome, Entypo } from "@expo/vector-icons";

export const MemberInfoScreen = ({ route }) => {
  const { name, role, image, github, linkedin, about, participation } = route.params;
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageWrapper}>
        <Image source={{ uri: image }} style={styles.image} />
        <Pressable onPress={() => navigation.goBack()} style={styles.backButton}>
          <AntDesign name="swapleft" size={50} color="black" />
        </Pressable>
      </View>
      <View style={styles.contentWrapper}>
        <View style={styles.headerRow}>
          <Text style={styles.name}>{name}</Text>
          <View style={styles.icons}>
            <Pressable onPress={() => Linking.openURL(github)} style={styles.icon}>
              <FontAwesome name="github" size={25} color="black" />
            </Pressable>
            <Pressable onPress={() => Linking.openURL(linkedin)} style={styles.icon}>
              <Entypo name="linkedin" size={25} color="black" />
            </Pressable>
          </View>
        </View>
        <View style={styles.subHeader}>
          <Text style={styles.role}>{role}</Text>
          <View style={styles.location}>
            <Entypo name="location-pin" size={18} color="black" />
            <Text style={styles.locationText}>Wroclaw, Poland</Text>
          </View>
        </View>
        <Text style={styles.sectionTitle}>About</Text>
        <Text style={styles.sectionText}>{about}</Text>
        <Text style={styles.sectionTitle}>Project participation</Text>
        <Text style={styles.sectionText}>{participation}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7CCC3",
  },
  imageWrapper: {
    width: "100%",
    height: 350,
    position: "relative",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  backButton: {
    position: "absolute",
    top: 50,
    left: 20,
  },
  contentWrapper: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
    marginTop: -30,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  name: {
    fontSize: 26,
    fontFamily: "KohSantepheap-Bold",
  },
  icons: {
    flexDirection: "row",
  },
  icon: {
    marginLeft: 10,
  },
  subHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
    gap: 10,
  },
  role: {
    fontSize: 16,
    fontFamily: "KohSantepheap-Regular",
    color: "#777",
  },
  location: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
  },
  locationText: {
    fontSize: 16,
    fontFamily: "KohSantepheap-Regular",
    color: "black",
  },
  sectionTitle: {
    fontSize: 25,
    fontFamily: "KohSantepheap-Bold",
    marginTop: 25,
    marginBottom: 6,
  },
  sectionText: {
    fontSize: 16,
    fontFamily: "KohSantepheap-Regular",
    color: "#333",
    lineHeight: 20,
  },
});

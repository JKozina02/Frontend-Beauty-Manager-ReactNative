import { View, Text, StyleSheet, Image, Linking, Pressable } from "react-native";

export const TeamMemberCard = ({ name, role, linkedin, github, image }) => {
  return (
    <View style={styles.card}>
      <View style={styles.contentRow}>
        <View style={styles.leftSide}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.role}>/ {role}</Text>
        </View>

        <Image source={{ uri: image }} style={styles.image} />
      </View>

      <View style={styles.links}>
        <Pressable onPress={() => Linking.openURL(linkedin)}>
          <Text style={styles.link}>LinkedIn</Text>
        </Pressable>

        <Text style={styles.linkSpacer}> </Text>

        <Pressable onPress={() => Linking.openURL(github)}>
          <Text style={styles.link}>Github</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 30,
    padding: 20,
    marginBottom: 30,
    alignItems: "center",
  },
  contentRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  leftSide: {
    transform: [{ rotate: "-90deg" }],
    width: 200,
    position: "absolute",
    left: -80,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  role: {
    fontSize: 12,
    textAlign: "center",
    color: "#555",
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 20,
    backgroundColor: "#eee",
    marginLeft: 40, // przesunięcie w prawo, by zrobić miejsce na tekst
  },
  links: {
    flexDirection: "row",
    marginTop: 15,
    justifyContent: "center",
  },
  link: {
    color: "#B55E4E",
    textDecorationLine: "underline",
    marginHorizontal: 10,
    fontSize: 16,
  },
  linkSpacer: {
    marginHorizontal: 5,
  },
});

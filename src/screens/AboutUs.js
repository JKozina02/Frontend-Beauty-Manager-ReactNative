import { StyleSheet, View, Text, Pressable, ScrollView } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
import { TeamMemberCard } from "../components/aboutUs/TeamMemberCard";
import { teamMembers } from "../components/aboutUs/TeamData";

export const AboutUs = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <Pressable onPress={() => navigation.goBack()} style={styles.backButton}>
          <AntDesign name="swapleft" size={50} color="black" />
        </Pressable>
        <Text style={styles.headerTitle}>About Team</Text>
      </View>
      <View style={styles.contentContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {teamMembers.map((member) => (
            <TeamMemberCard
              key={member.id}
              name={member.name}
              role={member.role}
              linkedin={member.linkedin}
              github={member.github}
              image={member.image}
              about={member.about}
              participation={member.participation}
            />
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#F7CCC3",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  backButton: {
    marginRight: 10,
  },
  headerTitle: {
    fontSize: 25,
    fontFamily: "KohSantepheap-Bold",
    textAlign: "center",
    flex: 1,
    marginRight: 30,
  },
  contentContainer: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: 30,
    padding: 20,
  },
});

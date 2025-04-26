import { Modal, View, StyleSheet, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "../../store/slices/MenuSlice";
import VectorImage from "../buttons/TestVectorIconsComponent";
import AntDesign from "@expo/vector-icons/AntDesign";

export default PopMenuComponent = ({ userName, role }) => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.menu.isOpen);
  return (
    <Modal animationType="slide" transparent={false} visible={isOpen} onRequestClose={() => dispatch(closeMenu())}>
      <View style={styles.container}>
        <View>
          <View style={{ flexDirection: "row", alignItems: "space between", margin: 10, marginTop: 30 }}>
            <Image style={styles.person} source={require("../../../assets/menu/person1.png")} />

            <View style={styles.data}>
              <Text style={styles.name}>{userName}</Text>
              <Text style={styles.role}>{role}</Text>
            </View>

            <Pressable onPress={() => dispatch(closeMenu())}>
              <AntDesign name="close" size={40} color="black" style={{ margin: 10 }} />
            </Pressable>
          </View>

          <View style={{ flexDirection: "column", alignItems: "space between", margin: 10, width: "100%" }}>
            <VectorImage
              onPress={() => console.log("Profile")}
              source="account-outline"
              imageStyle={styles.imgOptionStyle}
              option="Profile"
              iconLibrary="MaterialCommunityIcons"
              sizer={38}
              colour="#000000"
            />
            <VectorImage
              onPress={() => console.log("Privacy policy")}
              source="exclamationcircleo"
              imageStyle={styles.imgOptionStyle}
              option="Privacy policy"
              iconLibrary="AntDesign"
              sizer={32}
              colour="#000000"
            />
            <VectorImage
              onPress={() => console.log("My visits")}
              source="location-outline"
              imageStyle={styles.imgOptionStyle}
              option="My visits"
              iconLibrary="Ionicons"
              sizer={36}
              colour="#000000"
            />
            <VectorImage
              onPress={() => console.log("Favorites")}
              source="hearto"
              imageStyle={styles.imgOptionStyle}
              option="Favorites"
              iconLibrary="AntDesign"
              sizer={32}
              colour="#000000"
            />
            <VectorImage
              onPress={() => console.log("About us")}
              source="account-group-outline"
              imageStyle={styles.imgOptionStyle}
              option="About us"
              iconLibrary="MaterialCommunityIcons"
              sizer={36}
              colour="#000000"
            />
            <VectorImage
              onPress={() => console.log("Settings")}
              source="settings-outline"
              imageStyle={styles.imgOptionStyle}
              option="Settings"
              iconLibrary="Ionicons"
              sizer={32}
              colour={"#000000"}
            />
          </View>
        </View>
        <View style={styles.outLog}>
          <VectorImage
            onPress={() => console.log("Log out")}
            source="log-out-outline"
            imageStyle={styles.imgOptionStyle}
            option="Log out"
            iconLibrary="Ionicons"
            sizer={35}
            colour="#F7CCC3"
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  iks: {
    width: 32,
    height: 24,
    resizeMode: "contain",
    paddingTop: "60",
    paddingRight: "10",
  },
  person: {
    width: 75,
    height: 75,
    resizeMode: "contain",
    borderRadius: 15,
  },
  data: {
    flex: 1,
    marginLeft: 10,
    flexDirection: "column",
    marginTop: 15,
  },
  name: {
    fontFamily: "KohSantepheap-Bold",
    fontSize: 26,
    color: "#000",
    lineHeight: 30,
  },
  role: {
    fontFamily: "KohSantepheap-Regular",
    fontSize: 14,
    color: "#000",
    lineHeight: 15,
  },
  imgOptionStyle: {
    width: 40,
    height: 35,
    margin: 10,
    contentFit: "contain",
  },
  outLog: {
    flexDirection: "row",
    margin: 10,
  },
});

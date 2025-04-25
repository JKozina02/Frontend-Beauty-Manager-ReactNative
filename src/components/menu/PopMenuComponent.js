import { Modal, View, StyleSheet, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "../../store/slices/MenuSlice";
import MenuOption from "./MenuOptionComponent";

export default PopMenuComponent = ({ name, role }) => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.menu.isOpen);
  return (
    <Modal animationType="slide" transparent={false} visible={isOpen} onRequestClose={() => dispatch(closeMenu())}>
      <View style={styles.container}>
        <View>
          <View style={{ flexDirection: "row", alignItems: "space between", margin: 10, marginTop: 30 }}>
            <Image style={styles.person} source={require("../../../assets/menu/person1.png")} />

            <View style={styles.data}>
              <Text style={styles.name}>{name}</Text>
              <Text style={styles.role}>{role}</Text>
            </View>

            <Pressable onPress={() => dispatch(closeMenu())}>
              <Image style={styles.iks} source={require("../../../assets/menu/xMenu.png")} />
            </Pressable>
          </View>

          <View style={{ flexDirection: "column", alignItems: "space between", margin: 10, width: "100%" }}>
            <MenuOption
              source={require("../../../assets/menu/profile.png")}
              imageStyle={styles.imgOptionStyle}
              option="Profile"
            />
            <MenuOption
              source={require("../../../assets/menu/policy.png")}
              imageStyle={styles.imgOptionStyle}
              option="Privacy policy"
            />
            <MenuOption
              source={require("../../../assets/menu/visits.png")}
              imageStyle={styles.imgOptionStyle}
              option="My visits"
            />
            <MenuOption
              source={require("../../../assets/menu/fav.png")}
              imageStyle={styles.imgOptionStyle}
              option="Favorites"
            />
            <MenuOption
              source={require("../../../assets/menu/us.png")}
              imageStyle={styles.imgOptionStyle}
              option="About us"
            />
            <MenuOption
              source={require("../../../assets/menu/settings.png")}
              imageStyle={styles.imgOptionStyle}
              option="Settings"
            />
          </View>
        </View>
        <View style={styles.outLog}>
          <MenuOption
            source={require("../../../assets/menu/logOut.png")}
            imageStyle={styles.imgOptionStyle}
            option="Log out"
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
    width: 32,
    height: 32,
    margin: 10,
  },
  outLog: {
    flexDirection: "row",
    margin: 10,
  },
});

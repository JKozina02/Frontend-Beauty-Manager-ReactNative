import { useRef } from "react";
import { Modal, View, StyleSheet, Pressable, Text, Animated, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu, openMenu } from "../../store/slices/MenuSlice";
import MenuItemComponent from "./MenuItemComponent";

export const PopMenuComponent = ({ userName, role }) => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.menu.isOpen);
  const slideAnim = useRef(new Animated.Value(300)).current;
  const topLineAnim = useRef(new Animated.Value(0)).current;
  const bottomLineAnim = useRef(new Animated.Value(0)).current;
  const middleLineOpacity = useRef(new Animated.Value(1)).current;

  const toggleMenu = () => {
    if (isOpen) {
      Animated.parallel([
        Animated.timing(slideAnim, { toValue: 300, duration: 300, useNativeDriver: true }),
        Animated.timing(topLineAnim, { toValue: 0, duration: 300, useNativeDriver: true }),
        Animated.timing(bottomLineAnim, { toValue: 0, duration: 300, useNativeDriver: true }),
        Animated.timing(middleLineOpacity, { toValue: 1, duration: 300, useNativeDriver: true }),
      ]).start(() => dispatch(closeMenu()));
    } else {
      dispatch(openMenu());
      Animated.parallel([
        Animated.timing(slideAnim, { toValue: 0, duration: 300, useNativeDriver: true }),
        Animated.timing(topLineAnim, { toValue: 1, duration: 300, useNativeDriver: true }),
        Animated.timing(bottomLineAnim, { toValue: 1, duration: 300, useNativeDriver: true }),
        Animated.timing(middleLineOpacity, { toValue: 0, duration: 300, useNativeDriver: true }),
      ]).start();
    }
  };

  return (
    <>
      <Modal transparent visible={isOpen} animationType="none">
        <Pressable style={styles.modalOverlay} onPress={toggleMenu}>
          <Animated.View style={[styles.container, { transform: [{ translateX: slideAnim }] }]}>
            <View style={styles.header}>
              <Image style={styles.person} source={require("../../../assets/menu/person1.png")} />
              <View style={styles.data}>
                <Text style={styles.name}>{userName}</Text>
                <Text style={styles.role}>{role}</Text>
              </View>
            </View>
            <View style={styles.menuItems}>
              <MenuItemComponent
                onPress={() => console.log("Profile")}
                source="account-outline"
                imageStyle={styles.imgOptionStyle}
                option="Profile"
                iconLibrary="MaterialCommunityIcons"
                sizer={30}
                colour="#000000"
              />
              <MenuItemComponent
                onPress={() => console.log("Privacy policy")}
                source="exclamationcircleo"
                imageStyle={styles.imgOptionStyle}
                option="Privacy policy"
                iconLibrary="AntDesign"
                sizer={28}
                colour="#000000"
              />
              <MenuItemComponent
                onPress={() => console.log("My visits")}
                source="location-outline"
                imageStyle={styles.imgOptionStyle}
                option="My visits"
                iconLibrary="Ionicons"
                sizer={30}
                colour="#000000"
              />
              <MenuItemComponent
                onPress={() => console.log("Favorites")}
                source="hearto"
                imageStyle={styles.imgOptionStyle}
                option="Favorites"
                iconLibrary="AntDesign"
                sizer={30}
                colour="#000000"
              />
              <MenuItemComponent
                onPress={() => console.log("About us")}
                source="account-group-outline"
                imageStyle={styles.imgOptionStyle}
                option="About us"
                iconLibrary="MaterialCommunityIcons"
                sizer={30}
                colour="#000000"
              />
              <MenuItemComponent
                onPress={() => console.log("Settings")}
                source="settings-outline"
                imageStyle={styles.imgOptionStyle}
                option="Settings"
                iconLibrary="Ionicons"
                sizer={30}
                colour="#000000"
              />
            </View>

            <View style={styles.outLog}>
              <MenuItemComponent
                onPress={() => console.log("Log out")}
                source="log-out-outline"
                imageStyle={styles.imgOptionStyle}
                option="Log out"
                iconLibrary="Ionicons"
                sizer={35}
                colour="#E08573"
              />
            </View>
          </Animated.View>

          <TouchableOpacity style={styles.menuButton} onPress={toggleMenu}>
            <View style={styles.burgerContainer}>
              <Animated.View
                style={[
                  styles.burgerLine,
                  styles.topLine,
                  {
                    top: 100,
                  },
                  {
                    transform: [
                      { rotateZ: topLineAnim.interpolate({ inputRange: [0, 1], outputRange: ["0deg", "45deg"] }) },
                      { translateY: topLineAnim.interpolate({ inputRange: [0, 1], outputRange: [0, 8] }) },
                    ],
                  },
                ]}
              />
              <Animated.View style={[styles.burgerLine, styles.middleLine, { opacity: middleLineOpacity }]} />
              <Animated.View
                style={[
                  styles.burgerLine,
                  styles.bottomLine,
                  {
                    top: 84,
                  },
                  {
                    transform: [
                      {
                        rotateZ: bottomLineAnim.interpolate({ inputRange: [0, 1], outputRange: ["0deg", "-45deg"] }),
                      },
                      { translateY: bottomLineAnim.interpolate({ inputRange: [0, 1], outputRange: [0, -8] }) },
                    ],
                  },
                ]}
              />
            </View>
          </TouchableOpacity>
        </Pressable>
      </Modal>
      {!isOpen && (
        <TouchableOpacity style={styles.menuButton} onPress={toggleMenu}>
          <View style={styles.burgerContainer}>
            <View style={[styles.burgerLine, styles.topLine]} />
            <View style={[styles.burgerLine, styles.middleLine]} />
            <View style={[styles.burgerLine, styles.bottomLine]} />
          </View>
        </TouchableOpacity>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  menuButton: {
    position: "absolute",
    top: -15,
    right: 20,
    zIndex: 1002,
    elevation: 3,
  },
  burgerContainer: {
    zIndex: 1002,
    width: 32,
    height: 32,
    alignItems: "flex-end",
  },
  burgerLine: {
    height: 2,
    backgroundColor: "#000",
    borderRadius: 2,
  },
  topLine: {
    width: 32,
    marginBottom: 12,
  },
  middleLine: {
    width: 23,
    marginBottom: 12,
  },
  bottomLine: {
    width: 32,
  },
  modalOverlay: {
    ...StyleSheet.absoluteFillObject,
  },
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#FFFAFC",
    position: "absolute",
    paddingTop: 50,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
    paddingHorizontal: 20,
  },
  person: {
    width: 75,
    height: 75,
    resizeMode: "contain",
    borderRadius: 15,
  },
  data: {
    flex: 1,
    marginLeft: 15,
  },
  name: {
    fontFamily: "KohSantepheap-Bold",
    fontSize: 25,
    color: "#000",
  },
  role: {
    fontFamily: "KohSantepheap-Regular",
    fontSize: 13,
    color: "#7B7B7B",
  },
  menuItems: {
    flexDirection: "column",
    width: "100%",
  },
  imgOptionStyle: {
    width: 40,
    height: 35,
    marginLeft: 20,
    contentFit: "contain",
  },
  outLog: {
    marginVertical: 20,
  },
});

export default PopMenuComponent;

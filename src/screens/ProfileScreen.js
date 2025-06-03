import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Pressable, StyleSheet, TouchableOpacity, View } from "react-native";
import { HeadingComponent } from "../components/heading/HeadingComponent";
import { InputComponent } from "../components/form/InputComponent";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaProfile } from "../utils/validation/schema";
import { useDispatch, useSelector } from "react-redux";
import { CustomButton } from "../components/buttons/CustomButton";
import { setEmail, setName } from "../store/slices/form.slice";
import { useUpdateUserMutation } from "../store/services/authApi";
import { setProfileImage, updateUserData } from "../store/slices/auth.slice";
import { Image } from "react-native";
import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { pickImage } from "../utils/pickImage/pickImage";

export const ProfileScreen = () => {
  const navigation = useNavigation();
  const { email: currentEmail, name: currentName, id: userId } = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const [updateUser] = useUpdateUserMutation();
  const profileImage = useSelector((state) => state.auth.profileImage);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaProfile),
    defaultValues: {
      email: currentEmail,
      name: currentName,
      password: "",
      confirmPassword: "",
    },
  });
  useEffect(() => {
    const loadImage = async () => {
      const savedUri = await AsyncStorage.getItem("profileImage");
      if (savedUri) {
        dispatch(setProfileImage(savedUri));
      }
    };
    loadImage();
  }, []);

  const onSubmit = async (data) => {
    const payload = {
      id: userId,
      email: data.email,
      name: data.name,
    };

    if (data.password) {
      payload.password = data.password;
    }

    try {
      await updateUser(payload).unwrap();
      dispatch(
        updateUserData({
          name: data.name,
          email: data.email,
        })
      );
      navigation.goBack();
    } catch (error) {
      console.error("Failed to update profile:", error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.wrapperInformation}>
        <Pressable onPress={() => navigation.goBack()} style={styles.backButton}>
          <AntDesign name="swapleft" size={50} color="black" />
        </Pressable>
        <HeadingComponent level={3} children="Profile" />
      </View>

      <View style={styles.form}>
        <TouchableOpacity onPress={pickImage}>
          <Image
            source={profileImage ? { uri: profileImage } : require("../../assets/menu/person1.png")}
            style={styles.image}
          />
        </TouchableOpacity>
        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, value } }) => (
            <InputComponent
              placeholder="Your email"
              type="email-address"
              value={value}
              onChangeText={(text) => {
                onChange(text);
                dispatch(setEmail(text));
              }}
              error={errors.email?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="name"
          render={({ field: { onChange, value } }) => (
            <InputComponent
              placeholder="Your name"
              type="default"
              value={value}
              onChangeText={(text) => {
                onChange(text);
                dispatch(setName(text));
              }}
              error={errors.name?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, value } }) => (
            <InputComponent
              placeholder="Change password"
              type="default"
              secureTextEntry
              value={value}
              onChangeText={onChange}
              error={errors.password?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="confirmPassword"
          render={({ field: { onChange, value } }) => (
            <InputComponent
              placeholder="Repeat password"
              type="default"
              secureTextEntry
              value={value}
              onChangeText={onChange}
              error={errors.confirmPassword?.message}
            />
          )}
        />
      </View>

      <CustomButton title="Save" color={"#FFFAFC"} backgroundColor={"#000000"} onPress={handleSubmit(onSubmit)} />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
    borderRadius: 15,
  },
  container: {
    backgroundColor: "#FFFAFC",
    paddingTop: 50,
    paddingHorizontal: 20,
    flex: 1,
  },
  wrapperInformation: {
    flexDirection: "row",
    alignItems: "center",
    gap: 100,
  },
  form: {
    marginTop: 20,
    marginBottom: 44,
    gap: 27,
    alignItems: "center",
  },
});

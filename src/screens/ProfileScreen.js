import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Pressable, StyleSheet, View } from "react-native";
import { HeadingComponent } from "../components/heading/HeadingComponent";
import { InputComponent } from "../components/form/InputComponent";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaProfile } from "../utils/validation/schema";
import { useDispatch, useSelector } from "react-redux";
import { CustomButton } from "../components/buttons/CustomButton";
import { setEmail } from "../store/slices/form.slice";
import { useUpdateUserMutation } from "../store/services/authApi";

export const ProfileScreen = () => {
  const navigation = useNavigation();
  const { email: currentEmail, id: userId } = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const [updateUser] = useUpdateUserMutation();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaProfile),
    defaultValues: {
      email: currentEmail,
    },
  });

  const onSubmit = async (data) => {
    try {
      const result = await updateUser({ id: userId, email: data.email }).unwrap();
      dispatch(setEmail(data.email));
      console.log("Success", "Email updated successfully!");
      navigation.goBack();
    } catch (error) {
      console.error("Failed to update email:", error);
      console.log("Error", "Failed to update email. Please try again.");
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
      </View>

      <CustomButton title="Save" color={"#FFFAFC"} backgroundColor={"#000000"} onPress={handleSubmit(onSubmit)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    marginHorizontal: 20,
  },
  wrapperInformation: {
    flexDirection: "row",
    alignItems: "center",
    gap: 110,
  },
  form: {
    marginTop: 20,
    marginBottom: 20,
  },
});

import { StyleSheet, View } from "react-native";
import { HeaderFormComponent } from "../components/form/HeaderFormComponent";
import { HeadingComponent } from "../components/heading/HeadingComponent";
import { CustomTextComponent } from "../components/customText/CustomTextComponent";
import { Controller, useForm } from "react-hook-form";
import { InputComponent } from "../components/form/InputComponent";
import { CustomButton } from "../components/buttons/CustomButton";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { yupResolver } from "@hookform/resolvers/yup";
import { setConfirmPassword, setEmail, setName, setPassword } from "../store/slices/form.slice";
import { schema } from "../utils/validation/schema";

export const SignUpScreen = () => {
  const dispatch = useDispatch();
  const { name, email, password, confirmPassword } = useSelector((state) => state.form);
  const navigation = useNavigation();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name,
      email,
      password,
      confirmPassword,
    },
  });

  const onSubmit = (data) => {
    dispatch(setName(data.name));
    dispatch(setEmail(data.email));
    dispatch(setPassword(data.password));
    dispatch(setConfirmPassword(data.confirmPassword));
    console.log("Form submitted:", data);
  };
  return (
    <View style={styles.container}>
      <HeaderFormComponent tab={"Sign In"} onPress={() => navigation.navigate("SignIn")} />
      <View style={styles.wrapperTitle}>
        <HeadingComponent children={"Sign Up"} />
        <CustomTextComponent
          children={
            "Sign up if you haven't joined our beauty community yet, do it soon to use the services of our masters."
          }
        />
      </View>
      <View style={styles.containerForm}>
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
          name="password"
          render={({ field: { onChange, value } }) => (
            <InputComponent
              placeholder="Your password"
              type="default"
              secureTextEntry
              value={value}
              onChangeText={(text) => {
                onChange(text);
                dispatch(setPassword(text));
              }}
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
              onChangeText={(text) => {
                onChange(text);
                dispatch(setConfirmPassword(text));
              }}
              error={errors.confirmPassword?.message}
            />
          )}
        />

        <CustomButton title="Sign In" color={"#FFFAFC"} backgroundColor={"#000000"} onPress={handleSubmit(onSubmit)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperTitle: {
    gap: 20,
    paddingHorizontal: 20,
    marginTop: 60,
  },
  container: {
    backgroundColor: "#F7CCC3",
    flex: 1,
  },
  containerForm: {
    gap: 30,
    backgroundColor: "#FFFAFC",
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "70%",
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 70,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
});

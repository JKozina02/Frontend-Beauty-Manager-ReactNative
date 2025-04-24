import { StyleSheet, View } from "react-native";
import { InputComponent } from "../components/form/InputComponent";
import { useDispatch, useSelector } from "react-redux";
import { setEmail, setPassword } from "../store/slices/form.slice";
import { schema } from "../utils/validation/schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import { CustomButton } from "../components/buttons/CustomButton";

export const SignInScreen = () => {
  const dispatch = useDispatch();
  const { email, password } = useSelector((state) => state.form);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email,
      password,
    },
  });

  const onSubmit = (data) => {
    dispatch(setEmail(data.email));
    dispatch(setPassword(data.password));
    console.log("Form submitted:", data);
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerForm}>
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
              value={value}
              onChangeText={(text) => {
                onChange(text);
                dispatch(setPassword(text));
              }}
              error={errors.password?.message}
            />
          )}
        />

        <CustomButton title="Sign In" color={"#FFFAFC"} backgroundColor={"#000000"} onPress={handleSubmit(onSubmit)} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
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

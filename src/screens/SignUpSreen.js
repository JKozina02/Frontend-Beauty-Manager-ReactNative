import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { HeaderFormComponent } from "../components/form/HeaderFormComponent";
import { HeadingComponent } from "../components/heading/HeadingComponent";
import { CustomTextComponent } from "../components/customText/CustomTextComponent";
import { Controller, useForm } from "react-hook-form";
import { InputComponent } from "../components/form/InputComponent";
import { CustomButton } from "../components/buttons/CustomButton";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { yupResolver } from "@hookform/resolvers/yup";
import { resetForm, setConfirmPassword, setEmail, setName, setPassword } from "../store/slices/form.slice";
import { schemaSignUp } from "../utils/validation/schema";
import { useRegisterUserMutation } from "../store/services/authApi";
import { setAuthData } from "../store/slices/auth.slice";

export const SignUpScreen = () => {
  const dispatch = useDispatch();
  const { name, email, password, confirmPassword } = useSelector((state) => state.form);
  const navigation = useNavigation();
  const [registerUser] = useRegisterUserMutation();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaSignUp),
    defaultValues: {
      name,
      email,
      password,
      confirmPassword,
    },
  });

  const onSubmit = async (data) => {
    try {
      const response = await registerUser({
        name: data.name,
        email: data.email,
        password: data.password,
        is_admin: false,
      }).unwrap();

      dispatch(
        setAuthData({
          jwtToken: response.jwtToken,
          user: response.user,
          name: response.user.name,
        })
      );

      dispatch(resetForm());
      navigation.navigate("MainScreen");
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };
  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">
          <View style={styles.innerContainer}>
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

              <CustomButton
                title="Sign Up"
                color={"#FFFAFC"}
                backgroundColor={"#000000"}
                onPress={handleSubmit(onSubmit)}
              />
            </View>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F7CCC3",
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    paddingBottom: 40,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  wrapperTitle: {
    gap: 20,
    paddingHorizontal: 20,
    marginTop: 60,
  },
  containerForm: {
    gap: 30,
    backgroundColor: "#FFFAFC",
    width: "100%",
    height: "80%",
    marginTop: 20,
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 70,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
});

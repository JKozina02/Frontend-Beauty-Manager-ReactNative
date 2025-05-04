import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { InputComponent } from "../components/form/InputComponent";
import { useDispatch, useSelector } from "react-redux";
import { resetForm, setEmail, setPassword } from "../store/slices/form.slice";
import { schemaSignIn } from "../utils/validation/schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import { CustomButton } from "../components/buttons/CustomButton";
import { HeaderFormComponent } from "../components/form/HeaderFormComponent";
import { useNavigation } from "@react-navigation/native";
import { HeadingComponent } from "../components/heading/HeadingComponent";
import { CustomTextComponent } from "../components/customText/CustomTextComponent";
import { useLoginUserMutation } from "../store/services/authApi";
import { setAuthData } from "../store/slices/auth.slice";

export const SignInScreen = () => {
  const dispatch = useDispatch();
  const { email, password } = useSelector((state) => state.form);
  const navigation = useNavigation();
  const [loginUser] = useLoginUserMutation();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaSignIn),
    defaultValues: {
      email,
      password,
    },
  });

  const onSubmit = async (data) => {
    try {
      const response = await loginUser({
        email: data.email,
        password: data.password,
      }).unwrap();

      dispatch(
        setAuthData({
          jwtToken: response.jwtToken,
          user: response.user,
        })
      );

      dispatch(resetForm());
      navigation.navigate("MainScreen");
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">
          <View style={styles.innerContainer}>
            <HeaderFormComponent tab={"Sign Up"} onPress={() => navigation.navigate("SignUp")} />

            <View style={styles.wrapperTitle}>
              <HeadingComponent children={"Sign In"} />
              <CustomTextComponent
                children={"Glad to see you again, it's been a while, come in soon to use the services of our masters"}
              />
            </View>
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
                    secureTextEntry
                    onChangeText={(text) => {
                      onChange(text);
                      dispatch(setPassword(text));
                    }}
                    error={errors.password?.message}
                  />
                )}
              />

              <CustomButton
                title="Sign In"
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

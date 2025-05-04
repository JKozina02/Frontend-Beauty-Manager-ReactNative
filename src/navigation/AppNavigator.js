import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "../screens/HomeScreen";
import { SignInScreen } from "../screens/SignInScreen";
import { SignUpScreen } from "../screens/SignUpSreen";
import { NotFoundScreen } from "../screens/NotFoundScreen";
import { useSelector } from "react-redux";
import { selectAuth } from "../store/slices/auth.slice";
import { MainScreen } from "../screens/MainScreen";

const Stack = createNativeStackNavigator();

const AuthStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
    <Stack.Screen name="SignIn" component={SignInScreen} options={{ headerShown: false }} />
    <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false }} />
  </Stack.Navigator>
);

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="MainScreen" component={MainScreen} options={{ headerShown: false }} />
  </Stack.Navigator>
);

export const AppNavigator = () => {
  const { jwtToken } = useSelector(selectAuth);
  
  return jwtToken ? <HomeStack /> : <AuthStack />;
};

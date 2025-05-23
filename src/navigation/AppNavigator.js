import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "../screens/HomeScreen";
import { SignInScreen } from "../screens/SignInScreen";
import { SignUpScreen } from "../screens/SignUpSreen";
import { NotFoundScreen } from "../screens/NotFoundScreen";
import { useSelector } from "react-redux";
import { selectAuth } from "../store/slices/auth.slice";
import { MainScreen } from "../screens/MainScreen";
import BookingServiceScreen from "../screens/BookingServiceScreen";
import CategoryScreen from "../screens/CategoryScreen";
import { DetailProductScreen } from "../screens/DetailProductScreen";
import { BookingServiceScreen } from "../screens/BookingServiceScreen";
import { FavoritesScreen } from "../screens/FavoritesScreen";
import { ProfileScreen } from "../screens/ProfileScreen";

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
    <Stack.Screen name="*" component={NotFoundScreen} options={{ headerShown: false }} />
    <Stack.Screen name="CategoryScreen" component={CategoryScreen} options={{ headerShown: false }} />
    <Stack.Screen name="DetailProductScreen" component={DetailProductScreen} options={{ headerShown: false }} />
    <Stack.Screen name="BookingServiceScreen" component={BookingServiceScreen} options={{ headerShown: false }} />
    <Stack.Screen name="FavoritesScreen" component={FavoritesScreen} options={{ headerShown: false }} />
    <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{ headerShown: false }} />

  </Stack.Navigator>
);

export const AppNavigator = () => {
  const { jwtToken } = useSelector(selectAuth);

  return jwtToken ? <HomeStack /> : <AuthStack />;
};

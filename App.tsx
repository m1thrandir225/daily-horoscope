import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HoroscopeList from "./screens/HoroscopeList";
import HoroscopeView from "./screens/HoroscopeView";

const Stack = createNativeStackNavigator();

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HoroscopeList}
            options={{ title: "Select one: " }}
          ></Stack.Screen>
          <Stack.Screen
            name="HoroscopeView"
            component={HoroscopeView}
          ></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import TabsNavigator from "./TabsNavigator";
import { TabContextProvider } from "../context/TabContext";

const Stack = createNativeStackNavigator();
import { NativeBaseProvider, extendTheme } from 'native-base';
const MainNavigator = () => {
  const theme = extendTheme({
    colors: {
      // Add new color
      primary: {
        50: '#eef2ff',
        100: '#e0e7ff',
        200: '#c7d2fe',
        300: '#a5b4fc',
        400: '#818cf8',
        500: '#6366f1',
        600: '#4f46e5',
        700: '#4338ca',
        800: '#3730a3',
        900: '#312e81',
      },
      // Redefining only one shade, rest of the color will remain same.
      amber: {
        400: '#818cf8',
      },
    },
    config: {
      // Changing initialColorMode to 'dark'
      initialColorMode: 'dark',
    },
  });

  return (
    <NativeBaseProvider theme={theme}>
      <TabContextProvider>

        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Root"
            screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Root" component={TabsNavigator} />
          </Stack.Navigator>
        </NavigationContainer>
      </TabContextProvider>
    </NativeBaseProvider>

  );
};

export default MainNavigator;

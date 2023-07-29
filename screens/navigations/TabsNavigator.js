import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import AddButton from "../components/AddButton";
import { useTabMenu } from "../context/TabContext";
import HomeScreen from "../HomeScreen/HomeScreen";
import SearchScreen from "../SearchScreen/SearchScreen";
import SettingScreen from "../SettingScreen/SettingScreen";
import ProfileScreen from "../ProfileScreen/ProfileScreen";
import { COLORS } from "../../theme/theme";
import { useColorScheme } from 'nativewind';
const Tab = createBottomTabNavigator();



const TabsNavigator = () => {

  const { opened, toggleOpened } = useTabMenu();
  const { colorScheme } = useColorScheme();
  const isDarkMode = colorScheme === 'dark';
  const getIconColor = focused => {
    if (!isDarkMode) {
      return {
        tintColor: focused ? COLORS.primary : COLORS.dark,
      }
    }
    return {
      tintColor: focused ? COLORS.white : COLORS.primary,
    }
  }
  console.log(isDarkMode)
  return (
    <Tab.Navigator
      initialRouteName="Home"

      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: [styles.tabBar, isDarkMode ? { backgroundColor: COLORS.dark, shadowColor: COLORS.white, } : { backgroundColor: COLORS.white, shadowColor: COLORS.dark, }],
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarItemStyle: {
            height: 0,
          },
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabIconContainer} >
              <Image
                className="text-red-600"
                source={require("../../assets/images/Home.png")}
                resizeMode="contain"
                style={[styles.tabIcon, getIconColor(focused)]}
              />
            </View>
          ),
        }}
        listeners={{
          tabPress: e => opened && e.preventDefault(),
        }}
      />
      <Tab.Screen
        name="Transactions"
        component={SearchScreen}
        options={{
          tabBarItemStyle: {
            height: 0,
          },
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabIconContainer}>
              <Image
                source={require("../../assets/images/Transactions.png")}
                resizeMode="contain"
                style={[styles.tabIcon, getIconColor(focused)]}
              />
            </View>
          ),
        }}
        listeners={{
          tabPress: e => opened && e.preventDefault(),
        }}
      />
      <Tab.Screen
        name="Add"
        component={HomeScreen}
        options={{
          tabBarItemStyle: {
            height: 0,
          },
          tabBarButton: () => (
            <AddButton opened={opened} toggleOpened={toggleOpened} />
          ),
        }}
      />
      <Tab.Screen
        name="Statistics"
        component={SettingScreen}
        options={{
          tabBarItemStyle: {
            height: 0,
          },
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabIconContainer}>
              <Image
                source={require("../../assets/images/Graph.png")}
                resizeMode="contain"
                style={[styles.tabIcon, getIconColor(focused)]}
              />
            </View>
          ),
        }}
        listeners={{
          tabPress: e => opened && e.preventDefault(),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={ProfileScreen}
        options={{
          tabBarItemStyle: {
            height: 0,
          },
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabIconContainer}>
              <Image
                source={require("../../assets/images/Setting.png")}
                resizeMode="contain"
                style={[styles.tabIcon, getIconColor(focused)]}
              />
            </View>
          ),
        }}
        listeners={{
          tabPress: e => opened && e.preventDefault(),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    position: "absolute",
    padding: 0,
    left: 16,
    right: 16,

    bottom: 32,

    height: 56,
    borderRadius: 16,

    borderTopColor: "transparent",

    shadowOffset: {
      height: 6,
      width: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  tabIconContainer: {
    position: "absolute",
    top: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  tabIcon: {
    width: 32,
    height: 32,
  },
});

export default TabsNavigator;

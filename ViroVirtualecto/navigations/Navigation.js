import React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Biblioteca from "../screens/Biblioteca";
const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Biblioteca" component={Biblioteca} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

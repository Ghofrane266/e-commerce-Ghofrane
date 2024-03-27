import { StyleSheet, Text, View } from "react-native";
import React from "react";

import Details from "../screens/Details";
import Home from "../screens/Home";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


const Stack = createNativeStackNavigator();
export default function HomeStack() {
    return (

        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
    );
}
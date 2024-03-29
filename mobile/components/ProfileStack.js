import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import EditProfile from '../screens/EditProfile'
import Profile from '../screens/Profile'
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

export default function ProfileStack() {
  return (
    <Stack.Navigator
    initialRouteName="Profile"
    screenOptions={{ headerShown: false }}
>
    <Stack.Screen name="Profile" component={Profile} />
    <Stack.Screen name="EditProfile" component={EditProfile} />
</Stack.Navigator>
  )
}


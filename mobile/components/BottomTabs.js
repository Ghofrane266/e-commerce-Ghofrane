import { StyleSheet, Text, View } from 'react-native'
import * as React from 'react';



import Home from '../screens/Home'
import Notification from '../screens/Notification'
import Profile from '../screens/Profile'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createMaterialBottomTabNavigator();
import { createDrawerNavigator } from '@react-navigation/drawer';
import Favoris from '../screens/Favoris';
import HomeStack from './HomeStack';

const Drawer = createDrawerNavigator();

export default function BottomTabs() {
  return (
  
    
  
  
      <Tab.Navigator
        initialRouteName="HomeStack"
        activeColor="#00AFB9"

        style={styles.container}
      >
        <Tab.Screen
         style={styles.content}
          name="HomeStack"
          component={HomeStack}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Notifications"
          component={Notification}
          options={{
            tabBarLabel: 'Updates',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="bell" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="account" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>

   
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   
  },
  
})
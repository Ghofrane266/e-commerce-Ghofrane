import { StyleSheet, Text, View } from 'react-native'
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';


import Home from '../screens/Home'
import Notification from '../screens/Notification'
import Profile from '../screens/Profile'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createMaterialBottomTabNavigator();
import { createDrawerNavigator } from '@react-navigation/drawer';
import Favoris from '../screens/Favoris';

const Drawer = createDrawerNavigator();

export default function BottomTabs() {
  return (
  //   <NavigationContainer >
  //   <Drawer.Navigator>
  //   <Drawer.Screen name="Home" component={Home} />
  //   <Drawer.Screen name="Profile" component={Profile} />
  //   <Drawer.Screen name="Notification" component={Notification} />
  //   <Drawer.Screen name="Favoris" component={Favoris} />

  // </Drawer.Navigator>
  // </NavigationContainer>

    
    <NavigationContainer >
      <Tab.Navigator
        initialRouteName="Feed"
        activeColor="#D9EDBF"

        style={styles.container}
      >
        <Tab.Screen
         style={styles.content}
          name="Home"
          component={Home}
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
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   
  },
  
})
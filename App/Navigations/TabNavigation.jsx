import { View, Text, StyleSheet } from 'react-native';
import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import ProfileScreen from '../Screens/ProfileScreen/ProfileScreen';
import BookingScreen from '../Screens/BookingScreen/BookingScreen';
import { AntDesign } from '@expo/vector-icons';
import HomeNavigation from './HomeNavigation';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator 
      screenOptions={{
        headerShown:false
      }}
    >
        <Tab.Screen name='نوبت ها' component={BookingScreen}
        
        options={{
            tabBarIcon:({color,size})=>(
                <AntDesign name="calendar" size={24} color="black" />
            )
          }}
          />
        <Tab.Screen name='خانه' component={HomeNavigation}
          options={{
            tabBarIcon:({color,size})=>(
                <AntDesign name="home" size={24} color="black" />
            )
          }}
         
          />
        <Tab.Screen name='حساب کاربری' component={ProfileScreen}
          
          options={{
            tabBarIcon:({color,size})=>(
                <AntDesign name="user" size={24} color="black" />
            )
          }}
          
         />
    </Tab.Navigator>
  )
};

const styles = StyleSheet.create({
    navcon: {
        marginTop : '500px',
        padding : 20
    }
})
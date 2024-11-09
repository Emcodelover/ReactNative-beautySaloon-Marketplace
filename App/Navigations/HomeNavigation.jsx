import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import BusinessListByCategoryScreen from '../Screens/BusinessListByCategory/BusinessListByCategoryScreen';
import BusinessDetailsScreen from '../Screens/BusinessDetails/BusinessDetailsScreen';
import MainScreen from '../Screens/MainScreen/MainScreen'
import EducationScreen from '../Screens/EduScreen/EducationScreen';
import MedicalScreen from '../Screens/MedicalScreen/MedicalScreen';
import ListScreen from '../Screens/ListingScreen/ListScreen';
import BookingScreen from '../Screens/BookingScreen/BookingScreen';


const Stack = createStackNavigator();
export default function HomeNavigation() {
  return (
   <Stack.Navigator screenOptions={{ 
    headerShown:false
   }}>
    <Stack.Screen name="main" component={MainScreen} />
    <Stack.Screen name='home' component={HomeScreen} />
    <Stack.Screen name='business-list' component={BusinessListByCategoryScreen}/>
    <Stack.Screen name='business-detail' component={BusinessDetailsScreen}/>
    <Stack.Screen name='education' component={EducationScreen}/>
    <Stack.Screen name='medical' component={MedicalScreen}/>
    <Stack.Screen name='adver' component={ListScreen}/>
    <Stack.Screen name='booking' component={BookingScreen}/>

   </Stack.Navigator>
  )
}
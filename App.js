import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TabNavigation from './App/Navigations/TabNavigation';
import HomeScreen from './App/Screens/HomeScreen/HomeScreen';
import { useFonts } from 'expo-font';



export default function App() {
  const [fontsLoaded] = useFonts({
    'Yekan': require('./assets/fonts/Yekan.ttf'),
  });
  
  return (
    <NavigationContainer>
    <View style={styles.container} >
      
          <TabNavigation/>
          
        
      <StatusBar style="auto" />
    </View>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0027cc',
    height:'100%',
    width: '100%'
  },
});

import { View, Text, StyleSheet, FlatList, ScrollView } from 'react-native'
import React from 'react'
import Header from './Header'
import Slider from './Slider'
import BusinessList from './BusinessList'
import Locations from './Locations'


export default function HomeScreen() {
  return (
    <View style={styles.home}>
     
      <Header/>

      <ScrollView style={{paddingBottom:50}} showsVerticalScrollIndicator={false}>
      <Slider/>
      <BusinessList/>
      <Slider/>
      <BusinessList/>
      <Locations/>
      </ScrollView>

    </View>
  )
}
const styles = StyleSheet.create({
    home: {
        padding:0,
        alignItem:'center',
        textAlign:'center',
        marginTop:20,
        paddingBottom:260

    }
})
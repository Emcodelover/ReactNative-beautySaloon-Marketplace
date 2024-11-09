import { View, Text } from 'react-native'
import React from 'react'
import MedicalCategory from './MedicalCategory'
import MedicalHeader from './MedicalHeader'
import Slider from '../HomeScreen/Slider'

export default function MedicalScreen() {
  return (
    <View>
       <MedicalHeader/>
       <Slider/>
      <Text>MedicalScreen</Text>
    </View>
  )
}
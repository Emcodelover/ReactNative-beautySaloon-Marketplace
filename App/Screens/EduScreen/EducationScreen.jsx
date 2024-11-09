import { View, Text } from 'react-native'
import React from 'react'
import EducationHeader from './EducationHeader'
import Slider from '../HomeScreen/Slider'

export default function EducationScreen() {
  return (
    <View>
        <EducationHeader/>
        <Slider/>
      <Text>EducationScreen</Text>
    </View>
  )
}
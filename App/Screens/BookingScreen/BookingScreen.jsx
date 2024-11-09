import { View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';





export default function BookingScreen() {
  const navigation = useNavigation();
  return (
    <View style={{padding:10,margin:10}}>
       <TouchableOpacity  style={{alignItems:'flex-end'}}  onPress={()=>navigation.push('home')}>
      <View style={{display:'flex',flexDirection:'row',textAlign:'left'}}>
      <Text style={{fontFamily:'Yekan',paddingTop:5}}>بازگشت</Text>
       <Ionicons name="chevron-back" size={24} color="black" />
       
      </View>
      </TouchableOpacity>

      <Text style={{fontFamily:'Yekan',textAlign:'right',marginTop:20,fontSize:20}}>نوبت های من</Text>
      <View style={{marginTop:250}}>
        <Text style={{textAlign:'center',fontFamily:'Yekan'}}>در حال حاضر هیچ نوبتی برای شما ثبت نشده است</Text>
      </View>
    </View>
  )
}
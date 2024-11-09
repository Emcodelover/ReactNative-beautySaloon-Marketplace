import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import Slider from '../HomeScreen/Slider'
import { FontAwesome5 } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';





export default function MainScreen() {
  const navigation = useNavigation();
  return (
    <View>
      <View>
      <Text style={{margin:10,padding:10,textAlign:"center",marginTop:50,fontFamily:'Yekan'}}>گروه خدماتی خود را انتخاب کنید</Text>
      <View style={{display:'flex',flexDirection:'row',alignSelf:'center',margin:4}}>
        <TouchableOpacity style={{width:140,height:140,backgroundColor:'#f1a08f',borderRadius:20,margin:5,alignItems:'center', padding:10}} onPress={()=>navigation.push('home')}>
        <EvilIcons name="eye" size={63} color="white" style={{marginTop:10}} />
          <Text style={{textAlign:'center',fontFamily:'Yekan',color:"#fff",fontSize:18,marginTop:18}}>سالن های زیبایی</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{width:140,height:140,backgroundColor:'#f1a08f',borderRadius:20,margin:5, alignItems:'center',padding:10}} onPress={()=>navigation.push('medical')} >
        <FontAwesome5 name="clinic-medical" size={45} color="white" style={{marginTop:10}} />
          <Text  style={{textAlign:'center', fontFamily:'Yekan',color:"#fff",fontSize:18,marginTop:18}} >کلینیک های زیبایی</Text>
        </TouchableOpacity>
      </View>
      <View style={{display:'flex',flexDirection:'row', alignSelf:'center',margin:4,alignItems:'center'}}>
        <TouchableOpacity style={{width:140,height:140,backgroundColor:'#f1a08f',borderRadius:20,margin:5,alignItems:'center',padding:10,}} onPress={()=>navigation.push('education')} >
        <Ionicons name="school" size={55} color="white" style={{marginTop:10}}/>
          <Text  style={{textAlign:'center', fontFamily:'Yekan',color:"#fff",fontSize:18,marginTop:18}}>آموزش</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{width:140,height:140,backgroundColor:'#f1a08f',borderRadius:20,margin:5,alignItems:'center',padding:10}} onPress={()=>navigation.push('adver')}  >
        <Entypo name="list" size={55} color="white" style={{marginTop:10}} />
          <Text  style={{textAlign:'center', fontFamily:'Yekan',color:"#fff",fontSize:18,marginTop:18}} >نیازمندی ها</Text>
        </TouchableOpacity>
      </View>
      <Text style={{textAlign:'center',fontFamily:'Yekan',fontSize:20}}>با ما دیده شوید</Text>
      <Slider/>
      </View>
    </View>
  )
}
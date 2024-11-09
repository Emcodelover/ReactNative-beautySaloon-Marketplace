import { View, Text, TouchableOpacity} from 'react-native';
import { useRoute,useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';

export default function PageHeading({title}) {
    const navigation = useNavigation();
  return (
    <View style={{paddingTop:20}}>
          <TouchableOpacity onPress={()=>navigation.goBack()}>
      <View style={{display:'flex',flexDirection:'row',textAlign:'right',alignSelf:'flex-end'}}>
       <Ionicons name="chevron-back" size={24} color="black" />
       <Text style={{textAlign:'right',fontFamily:'Yekan',fontSize:18,paddingBottom:10,paddingTop:7,alignItems:'flex-end'}}>{title}</Text>
      </View>
      </TouchableOpacity>
    </View>
  )
}
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

export default function BusinessListItemSmall({business}) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={styles.card} onPress={()=>navigation.push('business-detail',
       {business:business})
       }>
      <Image  source={{uri:business?.images[0]?.url}}
         style={styles.image}
         />
         <Text style={{color:'#000',fontSize:'16px',textAlign:'right',fontFamily:'Yekan'}}>{business.name}</Text>
         <Text style={{color:'#454545',fontSize:'10px',textAlign:'right',fontFamily:'Yekan'}}>{business?.contactPerson}</Text>
         <Text style={{color:'#906051',borderRadius:3,fontSize:'10px',textAlign:'right',fontFamily:'Yekan',backgroundColor:'#f5e5e1',padding:5, borderRadius:3,marginTop:5,alignSelf:'flex-end'}}>{business?.category?.name}</Text>

    </TouchableOpacity>
  )
}
const styles= StyleSheet.create({

    image:{
        backgroundColor:'#f5e5e1',
        width: 120,
        height:80,
        marginTop:5,
        borderRadius:20,
        padding:3,
        marginBottom:8,
        margin:0,

    
    },
    card:{
        height:180,
        width:140,
        backgroundColor:'#fff',
        borderRadius:20,
        padding:10,
        marginRight:20,
        textAlign:'right',
        
      
    
        
    }
})
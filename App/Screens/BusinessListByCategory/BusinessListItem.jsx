import { View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function BusinessListItem({business}) {
    const navigation= useNavigation();
  return (
    <TouchableOpacity style={styles.bodyCon} onPress={()=>navigation.push('business-detail',
      {business:business})
      }>
      <Image source={{uri:business?.images[0]?.url}}
        style={styles.imageBox}
       />
       <View style={{alignSelf:'flex-start',marginTop:10}}>
       <Text style={{fontFamily:'Yekan',textAlign:'left',padding:2}}>{business.name}</Text>
       <Text style={{fontFamily:'Yekan',textAlign:'left',padding:2}}>{business.contactPerson}</Text>
       <Text style={{fontFamily:'Yekan',textAlign:'left',padding:2}}>{business.category.name}</Text>
       <Text style={{fontFamily:'Yekan',textAlign:'left',padding:2}}>{business.address}</Text>
       </View>
    </TouchableOpacity>
  )
}

const styles= StyleSheet.create({
   bodyCon: {
    direction:'rtl',
    padding:10,
    margin:10,
    borderRadius:20,
    display:'flex',
    flexDirection:'row',
    gap:10,
    backgroundColor:'#fff',
    marginBottom:10
  },

  imageBox: {
    width:90,
    height:90,
    backgroundColor:"#fff",
    borderRadius:20
}
})

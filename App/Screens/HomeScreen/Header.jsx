import { View, Text,TouchableOpacity, StyleSheet, TextInput} from 'react-native';
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Categories from './Categories';


export default function Header() {
  return (
    <View style={{backgroundColor:'#fff',paddingBottom:20,borderBottomRightRadius:30,borderBottomLeftRadius:30}}>
      <View style={styles.container}>
      <TouchableOpacity style={styles.tbutton}>
        <Text style={{color:'#fff',fontFamily:'Yekan'}}>آدرس شما
        <FontAwesome name="location-arrow" size={18} color="#fff" />
        </Text>
        </TouchableOpacity>
        <View>
        <TouchableOpacity style={{display:'flex',flexDirection:'row',textAlign:'right',alignItems:'center',marginTop:20,marginRight:10}}>
           <MaterialCommunityIcons name="dots-vertical" size={23} color="#ddd" />
            </TouchableOpacity>
            </View>
        </View> 
        <Categories/>
        <TextInput placeholder='جستجو آرایشگاه،کلینیک و....' style={{width:'95%',backgroundColor:'#ddd',marginTop:10,padding:6,borderRadius:99,marginLeft:8,fontFamily:'Yekan',textAlign:'right'}}/>
    </View>
     
   
  )
}

const styles = StyleSheet.create({
    
    container:{
        backgroundColor:'#fff',
        marginTop:10,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'

    }
    
    ,
    tbutton: {
        marginTop: 20,
        marginLeft: 5,
        borderRadius:99,
        backgroundColor:'#f1a08f',
        width:80,
        padding:5,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    }
})
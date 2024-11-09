import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, Modal} from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation,useRoute} from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';
import BusinessPhotos from './BusinessPhotos';
import PageHeading from '../../Components/PageHeading';
import BookingModal from './BookingModal';

export default function BusinessDetailsScreen() {
  const navigation = useNavigation();
  const param=useRoute().params;
  const [showModal,setShowmodal] = useState(false);
  const [business,setBusiness] = useState(param.business);
  useEffect(()=>{
       
     
  }, [])
  return business&&(
    <View style={{marginTop:30}}>
      <TouchableOpacity style={{display:'flex',flexDirection:'row',alignSelf:'flex-Start'}} onPress={()=>navigation.goBack()}>
      <Ionicons name="chevron-back" size={24} color="black" />
      <Text>بازگشت</Text>
      </TouchableOpacity>
      <Image source={{uri:business?.images[0]?.url}} style={{height:200,borderRadius:20,width:'90%',padding:20,margin:20,alignItems:'center'}}/>
      <View style={styles.conBtn}>
        <TouchableOpacity style={styles.chatBtn}>
          <Text style={{color:"#fff",fontFamily:"Yekan",textAlign:'center',fontFamily:'Yekan',fontSize:20}}>ارسال پیام</Text>  
        </TouchableOpacity>
        <TouchableOpacity style={styles.bookBtn} onPress={()=>setShowmodal(true)} >
          <Text style={{color:"#fff",fontFamily:"Yekan",textAlign:'center',fontSize:20}} > رزرو نوبت</Text>
        </TouchableOpacity>
        </View>
        <ScrollView style={{padding:10}}>
        <View style={{padding:10,margin:10,width:'90%',backgroundColor:'#fff',direction:'rtl',borderRadius:20}}>
        <Text style={{textAlign:'left',fontFamily:'Yekan',fontSize:20}}>خدمات</Text>
        <Text style={{textAlign:'left',padding:2,fontFamily:'Yekan',fontFamily:'Yekan'}}>{business.name}</Text>
          </View>  
          <View style={{padding:10,margin:10,width:'90%',backgroundColor:'#fff',direction:'rtl',borderRadius:20}}>
        <Text style={{textAlign:'left',fontFamily:'Yekan',fontSize:20}}>متخصص/سالن</Text>
        <Text style={{textAlign:'left',padding:2,fontFamily:'Yekan',fontFamily:'Yekan'}}>{business.contactPerson}</Text>

          </View>

          <View style={{padding:10,margin:10,width:'90%',backgroundColor:'#fff',direction:'rtl',borderRadius:20}}>
        <Text style={{textAlign:'left',fontFamily:'Yekan',fontSize:20}}>دسته بندی</Text>
        <Text style={{textAlign:'left',padding:2,fontFamily:'Yekan',fontFamily:'Yekan'}}>{business.category.name}</Text>
          </View>
       <View style={{padding:10,margin:10,width:'90%',backgroundColor:'#fff',direction:'rtl',borderRadius:20}}>   
        <Text style={{textAlign:'left',fontFamily:'Yekan',fontSize:20}}>مکان</Text>
        <Text style={{textAlign:'left',padding:2,fontFamily:'Yekan'}} >{business.address}</Text>
        </View>
        <View style={{padding:10,margin:10,width:'90%',backgroundColor:'#fff',direction:'rtl',borderRadius:20}}>
        <Text  style={{textAlign:'left',fontFamily:'Yekan',fontSize:20}}>مشخصات</Text>
        <Text  style={{textAlign:'left',fontFamily:'Yekan'}}>{business.about}</Text>
        </View>
        </ScrollView>

        <Modal
         visible={showModal}
         >
          <BookingModal hideModal={()=>setShowmodal(false)}/>
        </Modal>
      </View>
  )
}

const styles = StyleSheet.create ({
  conBtn: { display:'flex',
          flexDirection:'row',
          alignSelf:'center',
          gap:10
          
  
   
  },
  chatBtn:{
    backgroundColor:"#f1a08f",
    padding:10,
    borderRadius:20,
    width:'40%'

  },
  bookBtn:{
    backgroundColor:"#f1a08f",
    padding:10,
    borderRadius:20,
    width:'40%'
   }
})
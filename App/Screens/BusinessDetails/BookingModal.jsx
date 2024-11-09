import { View, Text, TouchableOpacity, StyleSheet, FlatList,TextInput, ScrollView, KeyboardAvoidingView} from 'react-native';
import { useRoute,useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import React, { useEffect, useState} from 'react';
import GlobalAPi from '../../../Utils/GlobalAPi';


export default function BookingModal({hideModal}) {
    const navigation = useNavigation();
    const [timeList,setTimeList]=useState();
    const [selectedTime,setSelectedTime]=useState();
    const [selectedDate,setSelectedDate]=useState();
    const [note,setNote]=useState();



    useEffect(()=>{
       getTime();
    },[] )
    const getTime=()=>{
     const timeList=[];
     for (let i=8; i<=12; i++){
        timeList.push({
            time: i+':00'
        })
        timeList.push({
            time: i+':30'
        })
      }
      for (let i=13; i<=20;i++){
        timeList.push({
            time: i+':00'
        })
        timeList.push({
            time: i+':30'
        })
      }
       setTimeList(timeList);
     }

    const createBooking=()=>{
        GlobalAPi.createBooking(data).then(resp =>{
            console.log("resp",resp)
         
         })
    }
  return (
   <ScrollView>
    <KeyboardAvoidingView>
   <View style={{paddingTop:30,direction:'rtl',padding:10,margin:10}}>
   <Text style={{textAlign:'left',fontFamily:'Yekan',fontSize:18,paddingBottom:10,paddingTop:7,alignItems:'flex-end'}}>رزرو نوبت</Text>
          <TouchableOpacity onPress={()=>hideModal()}>
      <View style={{display:'flex',flexDirection:'row',textAlign:'right',alignSelf:'flex-end'}}>
       <Text style={{textAlign:'right',fontFamily:'Yekan',fontSize:18,paddingBottom:10,paddingTop:7,alignItems:'flex-end'}}>بازگشت</Text>
       <Ionicons name="chevron-back" size={24} color="black" />
      </View>
      </TouchableOpacity>
      <Text style={{textAlign:'left',fontFamily:'Yekan',fontSize:18,paddingBottom:10,paddingTop:7,alignItems:'flex-end'}} >انتخاب تاریخ</Text>
        <View style={styles.calcon}>            
        </View>
        <View>
        <Text style={{textAlign:'left',fontFamily:'Yekan',fontSize:18,paddingBottom:10,paddingTop:7,alignItems:'flex-end'}} >انتخاب ساعت</Text>
            <FlatList 
             data={timeList}
             horizontal={true}
             showsHorizontalScrollIndicator={false}
             renderItem={({item,index})=>(
                <TouchableOpacity 
                  onPress={()=>setSelectedTime(item.time)}
                  style={[selectedTime==item.time?styles.selectedTime:styles.unSelectedTime]}
                  > 
                    <Text>{item.time}</Text>
                </TouchableOpacity>

             )}
            /> 

        </View>
        <Text style={{textAlign:'left',fontFamily:'Yekan',fontSize:18,paddingBottom:10,paddingTop:7,alignItems:'flex-end'}}>اضافه کردن توضیحات</Text>
        <TextInput placeholder='اینجا تایپ کنید' 
        style={{
            height:100,
           borderWidth:1,
           borderColor:'#f1a08f',
           width:'90%',
           backgroundColor:'#f5e5e1',
           margin:10,alignSelf:'center',
           borderRadius:15
             }}
           numberOfLines={4} 
           multiline={true} 
           onChange={(text)=>setNote(text)}

            />
         <TouchableOpacity style={styles.resBtn}>
          <Text style={{textAlign:'center',color:'#fff',fontFamily:'Yekan',fontSize:18}}>رزرو نوبت</Text>    
         </TouchableOpacity>   
    </View>
    </KeyboardAvoidingView>
    </ScrollView>
   
  )
}

const styles =  StyleSheet.create({

    calcon :{ 
        padding:10,
        margin:10,
        borderRadius:20,
        backgroundColor:'#f5e5e1',
         
    },
    unSelectedTime:{
        padding:4,
        borderWidth:1,
        margin:5,
        borderRadius:15,
        borderColor:"#f5e5e1"
    },
    selectedTime:{
        padding:4,
        backgroundColor:'#f1a08f',
        margin:5,
        borderRadius:15,
       

    },
    resBtn:{
      backgroundColor:"#f1a08f",
      padding:20,
      margin:10,
      borderRadius:99

      
     }
})
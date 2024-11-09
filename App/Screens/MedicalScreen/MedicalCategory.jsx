import { View, Text, StyleSheet, FlatList, Image,} from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalAPi from '../../../Utils/GlobalAPi'
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function MedicalCategory() {
    const [categories,setCategories]=useState([]);
    const navigation = useNavigation();
    useEffect(()=>{
        getCategories();
       },[]) 
       const getCategories=()=>{
        GlobalAPi.getCategories().then(resp=>{
         setCategories(resp.categories);
        })
      }

  return(
    <View>
       <FlatList
       horizontal={true}
       data= {categories}
       showsHorizontalScrollIndicator={false}
       renderItem ={({item,index})=>(
        
        <TouchableOpacity
           onPress={()=>navigation.push('business-list', {
             category:item.name
             })}
           >
            <View style={{height:130,width:130,padding:20, margin:10, backgroundColor:'#2ba0ff',borderRadius:20,alignItems:'center'}} >
                <Image source={{uri:item?.icon?.url}} style={{width:60,height:60,alignItems:'center'}}
                 
                 />
                 <Text style={{textAlign:'center',fontFamily:'Yekan',color:'#fff'}}>{item?.name}</Text>
            </View>
            
        </TouchableOpacity>    

         )}/>
    </View>
    
    

   )   
    }
  
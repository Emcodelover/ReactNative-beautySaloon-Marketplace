import { View, Text, StyleSheet, FlatList, Image,} from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalAPi from '../../../Utils/GlobalAPi'
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { getLocation } from 'graphql';

export default function Locations() {
    const [locations,setLocations]=useState([]);
    const navigation = useNavigation();
    useEffect(()=>{
        getLocations();
       },[]) 
       const getLocations=()=>{
        GlobalAPi.getLocations().then(resp=>{
         setLocations(resp.getLocations);
        })
      }

  return(
    <View>
        <Text>لوکیشن های برتر</Text>
       <FlatList
       horizontal={true}
       data= {getLocations}
       showsHorizontalScrollIndicator={false}
       renderItem ={({item,index})=>(
        
        <TouchableOpacity
           onPress={()=>navigation.push('business-list', {
             getLocation:item.locationName
             })}
           >
            <View style={{height:100,width:150,padding:20, margin:10, backgroundColor:'#f5e5e1',borderRadius:20,alignItems:'center'}} >
                
                 <Text style={{textAlign:'center',fontFamily:'Yekan'}}>{item?.locationName}</Text>
            </View>
            
        </TouchableOpacity>    

         )}/>
    </View>
    
    

   )   
    }
  
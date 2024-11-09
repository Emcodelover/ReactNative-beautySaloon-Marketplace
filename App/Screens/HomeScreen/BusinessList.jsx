import { View, Text, FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalAPi from '../../../Utils/GlobalAPi'
import BusinessListItemSmall from './BusinessListItemSmall';

export default function BusinessList() {
 const [businessList,setBusinessList]=useState([]);
useEffect(()=>{
    getBusinessList();
},[])
  const getBusinessList=()=>{
    GlobalAPi.getBusinessList().then(resp=>{

      console.log(resp);
      setBusinessList(resp.businessLists)
    })
  }
  return (
    <View>
      <Text  style={{textAlign:'right',padding : 10}}> پایین ترین قیمت ها</Text>
      <FlatList
       style={{marginLeft:10}}
       horizontal={true}
       showsHorizontalScrollIndicator={false}
       data={businessList}
       renderItem={({item,index})=> (
        <View>
          <BusinessListItemSmall business={item}/>
          </View>
       )}
       
       />

    </View>
  )
}
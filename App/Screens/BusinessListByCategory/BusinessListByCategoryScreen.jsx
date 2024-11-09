import { View, Text, TouchableOpacity, FlatList} from 'react-native'
import React, { useEffect,useState } from 'react'
import { useRoute,useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';
import GlobalAPi from '../../../Utils/GlobalAPi';
import BusinessListItem from './BusinessListItem';


export default function BusinessListByCategory() {
const [businessList,setBusinessList]=useState([]);
  const param=useRoute().params;
  const navigation = useNavigation();
  const getBusinessByCategory=()=>{
    GlobalAPi.getBusinessListByCategory(param.category)
    .then (resp=>{
      setBusinessList(resp.businessLists);
    })
  }
  useEffect(()=>{
    param&&getBusinessByCategory()
    getBusinessByCategory();
   },[param])

  return (
   <View style={{padding:10,marginTop:30}}>
    <View style={{direction:'rtl'}}>
    <Text style={{textAlign:'left',fontFamily:'Yekan',fontSize:18,paddingBottom:10,paddingTop:7,alignItems:'flex-start'}}>{param.category}</Text>
      <TouchableOpacity onPress={()=>navigation.goBack()} style={{alignItems:'flex-end'}}>
      <View style={{display:'flex',flexDirection:'row',textAlign:'left'}}>
      <Text style={{fontFamily:'Yekan',paddingTop:5}}>بازگشت</Text>
       <Ionicons name="chevron-back" size={24} color="black" />
       
      </View>
      </TouchableOpacity>
      </View>

       {businessList?.length>0? <FlatList
        data={businessList}
        renderItem={({item,index})=>(
           <BusinessListItem business={item}/>
        )} />:
        <Text style={{fontFamily:'Yekan',fonstSize:25,marginTop:'30%',textAlign:'center'}}>متخصص و یا مرکزی در این دسته بندی پیدا نشد</Text>}      
    </View>
  )
}
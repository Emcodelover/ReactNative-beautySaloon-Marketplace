import { View, Text, StyleSheet, FlatList, Image} from 'react-native'
import React, { useEffect, useState} from 'react'
import GlobalAPi from '../../../Utils/GlobalAPi'

export default function Slider() {
  const [slider,setSlider]=useState();
  useEffect(() => {
      getSliders();
    
      
    }, [])
    
    const getSliders =()=>{
        GlobalAPi.getSlider().then(resp=>{
            setSlider(resp?.sliders);
        })
    }
  return (
    <View style={{padding:10}}>
      <FlatList
         data= {slider}
         horizontal={true}
         showsHorizontalScrollIndicator={false}
         renderItem={({item,index})=>(
            <View style={{marginRight:20}}>
              <Image source={{uri:item.image.url}}
               style={{width:270,height:150,borderRadius:20,objectFit:'contain'}}
               />
             </View> 

          )}
            
      />
    </View>
  )
}
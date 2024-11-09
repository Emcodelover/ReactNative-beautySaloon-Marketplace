import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'

export default function BusinessPhotos({business}) {
  return (
    <View>
      <Text>BusinessPhotos</Text>
      <FlatList
       data={business.images}
       numColumns={2}
       renderItem={({item}) =>(
         
         <Image source={{uri:item.url}}
          style={{height:100, width:'50%',borderRadius:20}} />

        )}
         />
    </View>
  )
}
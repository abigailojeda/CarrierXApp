import React from 'react'
import { Button, Text, View } from 'react-native';


export const ParcelLists = (props:any) => {
  return (
  <View>
      <Text>ParcelLists</Text>
      <Button
        title='To a specific parce list'
        onPress={() => props.navigation.navigate('ParcelList')}
      />
  </View>
  )
}

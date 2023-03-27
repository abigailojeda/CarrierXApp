import React, { useContext, useEffect, useState } from 'react'
import { Button, Text, View, StyleSheet } from 'react-native';
import { ParcelsContext } from '../context/parcels/ParcelsContext';

export const ParcelLists = (props) => {
  const { parcels, test } = useContext(ParcelsContext)

  useEffect(() => {
    test()
  
  }, [])
  const styles = StyleSheet.create({
    baseText: {
      fontFamily: 'Cochin',
    },
    titleText: {
      fontSize: 20,
      fontWeight: 'bold',
    },
  });

  return (
    <View>
      <Text>ParcelLists</Text>
      <Button
        title='To a specific parcel list'
        onPress={() => props.navigation.navigate('ParcelList')}
      />
      
     {
      <Text>
        {parcels.map((a,i) =>(
          <Text style={styles.titleText} key={i}>{a.deliveryDate} {'\n'}</Text>
        ))}
      </Text>
     }
    </View>
  )
}

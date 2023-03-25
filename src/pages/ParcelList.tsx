import React from 'react';
import {Text, View, Button} from 'react-native';

export const ParcelList = (props: any) => {
  return (
    <View>
      <Text>ParcelList</Text>
      <Button
        title="to parcels list - with dates"
        onPress={() => props.navigation.navigate('ParcelLists')}
      />
    </View>
  );
};

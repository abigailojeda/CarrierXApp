import React from 'react'

import { createStackNavigator } from '@react-navigation/stack';
import { ParcelLists } from '../pages/ParcelLists';
import { ParcelList } from '../pages/ParcelList';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ParcelLists" component={ParcelLists} />
      <Stack.Screen name="ParcelList" component={ParcelList} />
    </Stack.Navigator>
  );
}
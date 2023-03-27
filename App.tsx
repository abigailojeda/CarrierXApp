import 'react-native-gesture-handler';

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {StackNavigator} from './src/navigation/StackNavigator';
import {ParcelsProvider} from './src/context/parcels/ParcelsProvider';
export const App = () => {
  return (
    <ParcelsProvider>
      <NavigationContainer>
        <StackNavigator></StackNavigator>
      </NavigationContainer>
    </ParcelsProvider>
  );
};

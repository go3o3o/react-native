import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MapHomeScreen from '@/screens/map/MapHomeScreen';
import {mapNavigations} from '@/constants';

export type MapStackParamList<navigationName extends string> = {
  [k in navigationName]: undefined;
};

const Stack = createStackNavigator<MapStackParamList<string>>();

export function MapStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: {
          backgroundColor: 'white',
        },
        headerStyle: {
          shadowColor: 'gray',
          backgroundColor: 'white',
        },
        headerTitleStyle: {
          fontSize: 15,
        },
        headerTintColor: 'black',
      }}>
      <Stack.Screen
        name={mapNavigations.MAP_HOME}
        component={MapHomeScreen}
        options={{
          headerTitle: ' ',
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

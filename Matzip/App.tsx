import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigator from './src/navigations/root/RootNavigator';

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    );
  }
}

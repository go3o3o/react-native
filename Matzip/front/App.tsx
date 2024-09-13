import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigator from './src/navigations/root/RootNavigator';
import {QueryClientProvider} from '@tanstack/react-query';
import queryClient from '@/api/queryClient';

export default class App extends React.Component {
  render() {
    return (
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </QueryClientProvider>
    );
  }
}

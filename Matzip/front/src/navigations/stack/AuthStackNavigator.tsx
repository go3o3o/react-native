import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {authNavigations} from '../../constants';
import AuthHomeScreen from '../../screens/auth/AuthHomeScreen';
import LoginScreen from '../../screens/auth/LoginScreen';
import SignupScreen from '../../screens/auth/SignupScreen';

export type AuthStackParamList<navigationName extends string> = {
  [k in navigationName]: undefined;
};

const Stack = createStackNavigator<AuthStackParamList<string>>();

export default function AuthStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: {
          backgroundColor: 'white',
        },
        headerStyle: {
          backgroundColor: 'white',
          shadowColor: 'gray', // 헤더 아래 보더 색상지정
        },
        headerTitleStyle: {
          fontSize: 15, // 헤더 폰트사이즈
        },
        headerTintColor: 'black', // 헤더 타이틀 색상 변경 옵션
      }}>
      <Stack.Screen
        name={authNavigations.AUTH_HOME}
        component={AuthHomeScreen}
        options={{headerTitle: '', headerShown: false}} // AuthHome 페이지는 헤더 제거
      />
      <Stack.Screen
        name={authNavigations.LOGIN}
        component={LoginScreen}
        options={{headerTitle: '로그인'}}
      />
      <Stack.Screen
        name={authNavigations.SIGNUP}
        component={SignupScreen}
        options={{headerTitle: '회원가입'}}
      />
    </Stack.Navigator>
  );
}

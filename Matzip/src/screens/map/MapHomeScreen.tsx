import React from 'react';
import {SafeAreaView, Text, Button} from 'react-native';
import useAuth from '@/hooks/queries/useAuth';

export default function MapHomeScreen() {
  const {logoutMutation} = useAuth();

  const handleLogout = () => {
    logoutMutation.mutate(null);
  };

  return (
    <SafeAreaView>
      <Text>맵 스크린</Text>
      <Button title="로그아웃" onPress={handleLogout} />
    </SafeAreaView>
  );
}

import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {AuthStackParamList} from '@/navigations/stack/AuthStackNavigator';
import {authNavigations} from '@/constants';
import CustomButton from '@/components/common/CustomButton';

type Props = StackScreenProps<
  AuthStackParamList,
  typeof authNavigations.AUTH_HOME
>;

export default function AuthHomeScreen({navigation}: Props) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>맛집 앱</Text>
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton
          label="로그인 하기"
          onPress={() => navigation.navigate(authNavigations.LOGIN)}
        />
        <CustomButton
          label="회원가입 하기"
          variant="outlined"
          onPress={() => navigation.navigate(authNavigations.SIGNUP)}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    width: '100%',
    marginBottom: 48,
  },
  logoText: {
    fontSize: 32,
    textAlign: 'center',
    fontWeight: '700',
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: 16,
    display: 'flex',
    gap: 12,
  },
});

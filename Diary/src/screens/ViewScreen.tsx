import React from 'react';
import {
  SafeAreaView,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import ViewHeader from '../components/ViewHeader';

const ViewScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <ViewHeader />
      <ScrollView>
        <TouchableOpacity
          activeOpacity={0.8}
          onLongPress={() => {
            navigation.navigate('Edit' as never);
          }}>
          <Text style={styles.content}>테스트</Text>
        </TouchableOpacity>
        <Text style={styles.date}>2024년 8월 1일</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 20,
    fontSize: 16,
    lineHeight: 20,
    color: '#424242',
  },
  date: {
    padding: 20,
    paddingTop: 0,
    fontSize: 12,
    color: '#BDBDBD',
  },
});

export default ViewScreen;

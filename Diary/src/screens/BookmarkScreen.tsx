import React from 'react';
import {Text, SafeAreaView, StyleSheet} from 'react-native';
import Header from '../components/Header';

const BookmarkScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="즐겨찾기" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({container: {flex: 1}});

export default BookmarkScreen;

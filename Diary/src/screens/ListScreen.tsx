import React from 'react';
import {Text, SafeAreaView, StyleSheet} from 'react-native';
import Header from '../components/Header';
import ArticleItem from '../components/ArticleItem';

const ListScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="목록" />
      <ArticleItem
        article={{
          id: 1,
          title: '테스트',
          content: 'hi',
          date: '2024년 7월 31일',
        }}
      />
      <ArticleItem
        article={{
          id: 2,
          title: '테스트2',
          content: 'bye',
          date: '2024년 7월 31일',
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({container: {flex: 1}});

export default ListScreen;

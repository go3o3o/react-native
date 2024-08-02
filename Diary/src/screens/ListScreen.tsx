import React from 'react';
import {SafeAreaView, FlatList, StyleSheet} from 'react-native';
import {withContext} from '../libs/Context';
import Header from '../components/Header';
import ArticleItem from '../components/ArticleItem';
import {IArticle} from '../interfaces/Article.interface';

type ListScreenProps = {articles: IArticle[]};

const ListScreen = (props: ListScreenProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="나의 글" />
      <FlatList
        data={props.articles}
        renderItem={({item}) => {
          return <ArticleItem article={item} />;
        }}
        keyExtractor={item => {
          return `${item.id}`;
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({container: {flex: 1}});

export default withContext(ListScreen);

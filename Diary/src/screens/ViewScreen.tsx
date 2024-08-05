import React from 'react';
import {
  SafeAreaView,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {withNavigation} from '@react-navigation/compat';
import {withContext} from '../libs/Context';
import ViewHeader from '../components/ViewHeader';
import {IArticle} from '../interfaces/Article.interface';

type ViewScreenProps = {articles: IArticle[]; route: any; toggle: any};

const ViewScreen = (props: ViewScreenProps) => {
  const navigation = useNavigation<NavigationProp<any>>();
  const {id} = props.route.params;
  const article = props.articles.find(a => a.id === id);
  return (
    <SafeAreaView style={styles.container}>
      <ViewHeader
        title={article?.title}
        bookmarked={article?.bookmarked || false}
        bookmark={() => {
          props.toggle(id);
        }}
      />
      <ScrollView>
        <TouchableOpacity
          activeOpacity={0.8}
          onLongPress={() => {
            navigation.navigate('Edit', {id: id});
          }}>
          <Text style={styles.content}>{article?.content}</Text>
        </TouchableOpacity>
        <Text style={styles.date}>{article?.date}</Text>
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

export default withNavigation(withContext(ViewScreen));

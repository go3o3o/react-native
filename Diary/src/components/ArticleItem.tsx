import React from 'react';
import {View, Text, TouchableOpacity, Platform, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation, NavigationProp} from '@react-navigation/native';

type ArticleItemProps = {
  article: {
    id: number;
    title: string;
    content: string;
    date: string;
  };
};

const ArticleItem = (props: ArticleItemProps) => {
  const navigation = useNavigation<NavigationProp<any>>();
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.container}
      onPress={() => {
        navigation.navigate('View', {id: props.article.id});
      }}>
      <View style={styles.icon}>
        <Icon name="list" size={14} color="#9E9E9E" />
      </View>
      <View style={styles.info}>
        <Text style={styles.title}>{props.article.title}</Text>
        <Text style={styles.content} numberOfLines={2}>
          {props.article.content}
        </Text>
        <Text style={styles.date}>{props.article.date}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {flexDirection: 'row', padding: 16, paddingBottom: 0},
  info: {
    flex: 1,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F1F1',
  },
  icon: {
    width: 16,
    height: 16,
    marginRight: 8,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Platform.select({ios: 1, android: 4}),
  },
  title: {
    marginBottom: 8,
    fontSize: 16,
    fontWeight: '600',
    color: '#212121',
  },
  content: {
    marginBottom: 4,
    fontSize: 14,
    color: '#9E9E9E',
    lineHeight: 18,
  },
  date: {
    fontSize: 12,
    color: '#BDBDBD',
  },
});

export default ArticleItem;

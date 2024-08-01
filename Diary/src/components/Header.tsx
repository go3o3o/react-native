import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

type HeaderType = {
  title: string;
};

const Header = (props: HeaderType) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 48,
    height: 52,
    borderBottomWidth: 0.3,
    borderBottomColor: '#BDBDBD',
  },
  header: {
    paddingLeft: 16,
    paddingRight: 16,
    color: '#212121',
    fontSize: 32,
    fontWeight: '600',
  },
});

export default Header;

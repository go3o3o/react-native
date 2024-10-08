import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Platform} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

type HeaderProps = {show: any};

const Header = (props: HeaderProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>할 일 목록</Text>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={props.show}
        style={styles.add}>
        <Ionicons name="add" size={24} color="#FFF" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 56,
    marginBottom: 16,
    marginLeft: 16,
    marginRight: 16,
  },
  title: {
    color: '#212121',
    fontSize: 32,
    fontWeight: '600',
  },
  add: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#212121',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Platform.select({ios: 2, android: 0}),
    paddingLeft: Platform.select({ios: 1, android: 0}),
  },
});

export default Header;

import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

type DeleteButtonProps = {onPress: any};

const DeleteButton = (props: DeleteButtonProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={props.onPress}
      style={styles.button}>
      <Text style={styles.text}>삭제</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 60,
    height: 60,
    backgroundColor: '#FE5746',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#FFF',
  },
});

export default DeleteButton;

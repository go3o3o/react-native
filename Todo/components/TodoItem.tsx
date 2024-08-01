import React from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Swipeable} from 'react-native-gesture-handler';

import DeleteButton from './DeleteButton';

type TodoItemProps = {title: string; done: boolean; delete: any; toggle: any};

const TodoItem = (props: TodoItemProps) => {
  return (
    <Swipeable
      renderRightActions={() => <DeleteButton onPress={props.delete} />}>
      <View style={styles.container}>
        <View style={styles.todo}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={props.toggle}
            style={props.done ? styles.done : styles.check}>
            <FontAwesome name="check" color="#E5E5E5" />
          </TouchableOpacity>
          <Text style={styles.title}>{props.title}</Text>
        </View>
      </View>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: '#FFF',
  },
  todo: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  title: {
    fontSize: 16,
    color: '#424242',
  },
  check: {
    borderWidth: 1,
    borderColor: '#E5E5E5',
    width: 28,
    height: 28,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  done: {
    width: 28,
    height: 28,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
    backgroundColor: 'pink',
  },
});

export default TodoItem;

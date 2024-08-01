import React from 'react';
import {StyleSheet, View, TextInput} from 'react-native';
import Modal from 'react-native-modal';

type TaskModalProps = {
  isVisible: boolean;
  hide: any;
  add: any;
};

const TaskModal = (props: TaskModalProps) => {
  let title = '';
  return (
    <Modal
      isVisible={props.isVisible}
      avoidKeyboard
      onBackdropPress={props.hide}
      style={styles.modal}>
      <View style={styles.container}>
        <TextInput
          onChangeText={(text: string) => {
            title = text;
          }}
          onEndEditing={() => props.add(title)}
          placeholder="새로운 할 일을 추가해 주세요."
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  container: {
    padding: 16,
    backgroundColor: '#FFF',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
});

export default TaskModal;

import React from 'react';
import {TextInput, View, SafeAreaView, StyleSheet} from 'react-native';
import {withContext} from '../libs/Context';
import EditHeader from '../components/EditHeader';

type EditScreenProps = {create: any};

const EditScreen = (props: EditScreenProps) => {
  let title = '';
  let content = '';
  return (
    <SafeAreaView style={styles.container}>
      <EditHeader
        done={() => {
          props.create(title, content);
        }}
      />
      <View style={styles.body}>
        <TextInput
          placeholder="제목"
          onChangeText={(text: string) => {
            title = text;
          }}
          style={styles.title}
        />
        <View style={styles.divider} />
        <TextInput
          placeholder="이곳을 눌러 작성을 시작하세요."
          multiline={true}
          onChangeText={(text: string) => {
            content = text;
          }}
          style={styles.content}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  body: {
    flex: 1,
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 16,
    paddingRight: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#212121',
  },
  content: {
    flex: 1,
    fontSize: 16,
    lineHeight: 20,
    color: '#424242',
  },
  divider: {
    marginTop: 12,
    marginBottom: 12,
    height: 1,
    width: '100%',
    backgroundColor: '#F1F1F1',
  },
});

export default withContext(EditScreen);

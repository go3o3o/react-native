import React from 'react';
import {StyleSheet, SafeAreaView, FlatList} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Header from './components/Header';
import TodoItem from './components/TodoItem';
import TaskModal from './components/TaskModal';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

export default class App extends React.Component {
  state = {
    todos: [
      {title: '클래스101', done: true},
      {title: '코딩 테스트 준비하기', done: false},
    ],
    showModal: false,
  };

  componentDidMount(): void {
    AsyncStorage.getItem('@Todo:state').then((state: any) => {
      this.setState(JSON.parse(state));
    });
  }

  save = () => {
    AsyncStorage.setItem('@Todo:state', JSON.stringify(this.state));
  };

  render(): React.ReactNode {
    return (
      <GestureHandlerRootView>
        <SafeAreaView style={styles.container}>
          <Header
            show={() => {
              this.setState({showModal: true});
            }}
          />
          <FlatList
            data={this.state.todos}
            renderItem={({item, index}) => {
              return (
                <TodoItem
                  title={item.title}
                  done={item.done}
                  delete={() => {
                    this.setState(
                      {
                        todos: this.state.todos.filter((_, i) => i !== index),
                      },
                      this.save,
                    );
                  }}
                  toggle={() => {
                    const newTodos = [...this.state.todos];
                    newTodos[index].done = !newTodos[index].done;
                    this.setState({todos: newTodos}, this.save);
                  }}
                />
              );
            }}
            keyExtractor={(_, index) => {
              return `${index}`;
            }}
          />
          <TaskModal
            isVisible={this.state.showModal}
            hide={() => {
              this.setState({showModal: false});
            }}
            add={(title: string) => {
              this.setState(
                {
                  todos: this.state.todos.concat({title: title, done: false}),
                },
                this.save,
              );
            }}
          />
        </SafeAreaView>
      </GestureHandlerRootView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
});

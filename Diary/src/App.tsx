import React from 'react';
import {ContextProvider} from './libs/Context';
import Navigator from './Navigator';

export default class App extends React.Component {
  state = {
    articles: [
      {
        id: 1,
        title: '테스트',
        content: 'hi',
        date: '2024년 7월 31일',
        bookmarked: true,
      },
      {
        id: 2,
        title: '테스트2',
        content: 'bye',
        date: '2024년 7월 31일',
      },
    ],
  };

  render(): React.ReactNode {
    return (
      <ContextProvider articles={this.state.articles}>
        <Navigator />
      </ContextProvider>
    );
  }
}

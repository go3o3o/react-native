import React from 'react';
import {ContextProvider} from './libs/Context';
import Navigator from './Navigator';
import {IArticle} from './interfaces/Article.interface';

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
      <ContextProvider
        articles={this.state.articles}
        create={(title: string, content: string) => {
          const now = new Date();
          const newArticle = {
            id: this.state.articles.length + 1,
            title: title,
            content: content,
            bookmarked: false,
            date: `${now.getFullYear()}년 ${
              now.getMonth() + 1
            }월 ${now.getDate()}일`,
          };
          this.setState({
            articles: [newArticle].concat(this.state.articles as IArticle[]),
          });
        }}
        update={(id: number, title: string, content: string) => {
          const newArticles = [...this.state.articles];
          const index = newArticles.findIndex(a => a.id === id);
          newArticles[index].title = title;
          newArticles[index].content = content;
          this.setState({articles: newArticles});
        }}>
        <Navigator />
      </ContextProvider>
    );
  }
}

import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ContextProvider} from './libs/Context';
import Navigator from './Navigator';
import {IArticle} from './interfaces/Article.interface';

export default class App extends React.Component {
  state = {
    articles: [],
  };

  componentDidMount(): void {
    AsyncStorage.getItem('@diary:state').then((state: any) => {
      this.setState(JSON.parse(state));
    });
  }

  save = () => {
    AsyncStorage.setItem('@diary:state', JSON.stringify(this.state));
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
          this.setState(
            {
              articles: [newArticle].concat(this.state.articles as IArticle[]),
            },
            this.save,
          );
        }}
        update={(id: number, title: string, content: string) => {
          const newArticles = [...this.state.articles];
          const index = newArticles.findIndex(a => a.id === id);
          newArticles[index].title = title;
          newArticles[index].content = content;
          this.setState({articles: newArticles}, this.save);
        }}
        toggle={(id: number) => {
          const newArticles = [...this.state.articles];
          const index = newArticles.findIndex(a => a.id === id);
          newArticles[index].bookmarked = !newArticles[index].bookmarked;
          this.setState({articles: newArticles}, this.save);
        }}>
        <Navigator />
      </ContextProvider>
    );
  }
}

// @flow

import React, { Component } from 'react';
import superagent from 'superagent';

import './App.css';

type Author = {
  name: string,
  slug: string,
};
type Book = {
  authors: Array<Author>,
  document: string,
  id: string,
  image: string,
  largeImage: string,
  mediumImage: string,
  shortTitle: string,
  slug: string,
  title: string,
};
type Module = { type: string, books?: Array<Book> };
type Response = {
  id: string,
  modules: Array<Module>,
  slug: string,
  title: string,
};

type Props = {};
type State = {
  books: Array<Book>,
};

class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = { books: [] };
  }

  componentDidMount() {
    superagent.get('https://api.glose.com/v1/booklists/free-books').then(
      (response: { body: Response }) => {
        const books = response.body.modules[1].books;
        this.setState({ books: books || [] });
      },
      error => {
        console.warn(error);
      }
    );
  }

  render() {
    const { books } = this.state;
    return (
      <div className="App">
        <ul>{books.map(book => <li key={book.slug}>{book.title}</li>)}</ul>
      </div>
    );
  }
}

export default App;

// @flow

import React, { Component } from 'react';
import type { Book } from 'types';
import './App.css';

type Props = {
  fetchBooks: () => Promise<Array<Book>>,
};
type State = {
  books: Array<Book>,
};

class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = { books: [] };
  }

  componentDidMount() {
    const { fetchBooks } = this.props;
    return fetchBooks().then((books: Array<Book>) => {
      this.setState({ books });
    });
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

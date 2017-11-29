// @flow

import React, { Component } from 'react';
import type { Book as BookType } from 'types';
import Book from 'components/book/book';
import './App.css';

type Props = {
  fetchBooks: () => Promise<Array<BookType>>,
};
type State = {
  books: Array<BookType>,
};

class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = { books: [] };
  }

  componentDidMount() {
    const { fetchBooks } = this.props;
    return fetchBooks().then((books: Array<BookType>) => {
      this.setState({ books: books || [] });
    });
  }

  render() {
    const { books } = this.state;
    return (
      <div className="App">
        <section className="Shelf">
          {books.map(book => <Book key={book.id} book={book} />)}
        </section>
      </div>
    );
  }
}

export default App;

// @flow

import React, { Component } from 'react';
import type { Book as BookType } from 'types';
import './book.css';

type Props = {
  book: BookType,
};

class Book extends Component<Props> {
  render() {
    const { book } = this.props;
    return (
      <article className="Book">
        <img className="Book__Image" src={book.image} alt={book.title} />
        <header>
          <h2 className="Book__Title">{book.title}</h2>
        </header>
      </article>
    );
  }
}

export default Book;

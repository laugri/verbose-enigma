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
    return <article className="Book">{book.title}</article>;
  }
}

export default Book;

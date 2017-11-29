// @flow

import React, { Component } from 'react';
import type { Book as BookType, Author } from 'types';
import './book.css';

type Props = {
  book: BookType,
};

class Book extends Component<Props> {
  renderAuthorLine(authors: Array<Author>) {
    // arbitrary display only first author.
    if (authors.length) {
      return (
        <p className="Book__Author">
          by <strong>{authors[0].name}</strong>
        </p>
      );
    } else {
      return <p className="Book__Author" />;
    }
  }

  render() {
    const { book } = this.props;
    return (
      <article className="Book">
        <img className="Book__Image" src={book.image} alt={book.title} />
        <header>
          <h2 className="Book__Title" title={book.title}>
            {book.title}
          </h2>
          {this.renderAuthorLine(book.authors)}
        </header>
      </article>
    );
  }
}

export default Book;

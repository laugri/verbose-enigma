// @flow

import React, { Component } from 'react';
import type { Book as BookType, Author } from 'types';
import SocialBadge from 'components/socialbadge/socialbadge';
import './book.css';

type Props = {
  book: BookType,
};

class Book extends Component<Props> {
  renderAuthorLine(authors: Array<Author>) {
    // arbitrary display only first author.
    if (authors.length) {
      return <p className="Book__Author">by {authors[0].name}</p>;
    } else {
      return <p className="Book__Author--empty">&nbsp;</p>;
    }
  }

  render() {
    const { book } = this.props;
    return (
      <article className="Book">
        <div className="Book__ImageFrame">
          <img className="Book__Image" src={book.image} alt={book.title} />
        </div>
        <section className="Book__Details">
          <div className="Book__Details__Social">
            <SocialBadge />
            <SocialBadge />
            <SocialBadge />
          </div>
          <div className="PriceBadge">Free</div>
        </section>
        <header className="Book__Meta">
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

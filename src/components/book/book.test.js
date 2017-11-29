// @flow

import React from 'react';
import { shallow } from 'enzyme';
import Book from './book';

describe('Book', () => {
  const mockBook = {
    authors: [],
    document: '',
    id: '',
    image: '',
    largeImage: '',
    mediumImage: '',
    shortTitle: '',
    slug: '',
    title: '',
  };

  test('renders without crashing', () => {
    shallow(<Book book={mockBook} />);
  });
});

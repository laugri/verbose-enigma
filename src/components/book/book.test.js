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

  test('should not display an author but still display a paragraph', () => {
    const wrapper = shallow(<Book book={mockBook} />);
    expect(wrapper.find('.Book__Author--empty').exists()).toBe(true);
  });

  test('should display the an author', () => {
    const wrapper = shallow(
      <Book book={{ ...mockBook, authors: [{ name: 'A', slug: 'a' }] }} />
    );
    expect(wrapper.find('.Book__Author').exists()).toBe(true);
  });
});

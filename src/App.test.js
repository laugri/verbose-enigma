// @flow

import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  test('renders without crashing', () => {
    shallow(<App fetchBooks={() => Promise.resolve()} />);
  });

  describe('componentDidMount', () => {
    const mockBooks = [
      {
        authors: [],
        document: '',
        id: '',
        image: '',
        largeImage: '',
        mediumImage: '',
        shortTitle: '',
        slug: '',
        title: '',
      },
    ];
    test('should call fetchBooks and populate the state with the results', () => {
      const fetchBooks = jest.fn(() => Promise.resolve(mockBooks));
      const instance = shallow(<App fetchBooks={fetchBooks} />).instance();

      instance.componentDidMount().then(() => {
        expect(fetchBooks).toHaveBeenCalled();
        expect(instance.state).toEqual({ books: mockBooks });
      });
    });
  });
});

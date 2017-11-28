import superagent from 'superagent';
import type { Response } from 'types';

export function fetchBooks() {
  return superagent.get('https://api.glose.com/v1/booklists/free-books').then(
    (response: { body: Response }) => {
      return response.body.modules[1].books;
    },
    error => {
      console.warn(error);
      return Promise.reject(error);
    }
  );
}

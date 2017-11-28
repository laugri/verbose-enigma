// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { fetchBooks } from './client';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <App fetchBooks={fetchBooks} />,
  document.getElementById('root')
);
registerServiceWorker();

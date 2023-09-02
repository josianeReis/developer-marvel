// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';

const rootEl = document.querySelector('#root');
if (!rootEl) throw new Error('Cannot find root element with that id');

const root = createRoot(rootEl);
// 2ede135777c9d2c3f38eac3c50069a81
// f1ef23ababe13e9700845201c64095cca463d8e9

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

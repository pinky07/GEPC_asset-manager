import 'bootstrap/dist/css/bootstrap.css';
import 'react-select/dist/react-select.css';

import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './app';
import configStore from './store/configStore';
import registerServiceWorker from './registerServiceWorker';

const store = configStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();

import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import reducers from '../reducers';

export default function configStore() {
  return createStore(
    reducers,
    {},
    composeWithDevTools(applyMiddleware(thunk, logger))
  );
}

// NOTES:
// - 'thunk' middleware must go before 'logger' middleware
//

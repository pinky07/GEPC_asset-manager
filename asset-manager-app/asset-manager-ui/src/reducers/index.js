import { combineReducers } from 'redux';

import allocationGrid from './GridReducer';
import allocationTree from './TreeReducer';
import shared from './sharedReducer';
import spotFire from './spotFireReducer';

export default combineReducers({
  allocationTree,
  allocationGrid,
  shared,
  spotFire,
});

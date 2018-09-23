import { combineReducers } from 'redux';

import ItemsReducer from './Items';

const AppReducer = combineReducers({
  items: ItemsReducer,
});

export default AppReducer;

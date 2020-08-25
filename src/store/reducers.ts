import { combineReducers } from 'redux';

import jsonpath from './jsonpath/reducer';

const rootReducer = combineReducers({
  jsonpath,
});

export default rootReducer;

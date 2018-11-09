import { combineReducers } from 'redux';
import FetchReducer from './fetchReducer';

const rootReducer = combineReducers({
  air: FetchReducer,
});

export default rootReducer;

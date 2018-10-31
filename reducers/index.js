import { combineReducers } from 'redux';
import FetchReducer from './fetch_reducer';

const rootReducer = combineReducers({
  air: FetchReducer,
});

export default rootReducer;
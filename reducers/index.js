import { combineReducers } from 'redux';
import allReducer from './fetchAllReducer';
import stationReducer from './fetchByStationReducer';

const rootReducer = combineReducers({
  allReducer,
  stationReducer
});

export default rootReducer;

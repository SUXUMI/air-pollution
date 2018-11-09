import {
  FETCH_ALL_DATA,
  FETCH_BY_STATION_ID,
} from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_ALL_DATA: {
      return {
        ...state,
        allStation: action.payload.data,
        loading: false,
      };
    }
    case FETCH_BY_STATION_ID: {
      return {
        ...state,
        stationId: action.payload.data,
        loading: false,
      };
    }
    default:
      return state;
  }
};

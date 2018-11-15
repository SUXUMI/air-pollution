import {
  FETCH_BY_STATION_ID,
  LOADING_ERROR,
  RESET,
  ADD_VALUE_FOR_SENSORS,
} from '../actions/types';

const INITIAL_STATE = {
  error: '',
  loading: false,
  value: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_BY_STATION_ID: {
      return {...state, stations: action.payload.data, loading: false};
    }
    case ADD_VALUE_FOR_SENSORS: {
      return {
        ...state,
        stations: state.stations.map(el => ({
          ...el,
          value: action.payload.data.values[0].value
        }))
      };
    }
    case LOADING_ERROR:
      return {...state, error: 'Something went wrong'};

    case RESET:
      return {};

    default:
      return state;
  }
};

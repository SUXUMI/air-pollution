import {
  FETCH_BY_STATION_ID,
  LOADING_ERROR,
  RESET,
  LOADING,
  ADD_VALUE_FOR_SENSORS,
} from '../actions/types';

const INITIAL_STATE = {
  oneStation: [],
  sensors: {},
  loading: false,
  hasError: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_BY_STATION_ID: {
      return { ...state, oneStation: action.payload.data, loading: false };
    }
    case ADD_VALUE_FOR_SENSORS: {
      const sensorValue = (action.payload.data.values.length >= 0
          && action.payload.data.values[0].value != null) ? action.payload.data.values[0].value : 0;
      return {
        ...state,
        sensors: { ...state.sensors, [action.payload.data.key]: sensorValue },
        loading: false,
      };
    }
    case LOADING:
      return { ...state, loading: true };
    case LOADING_ERROR:
      return { ...state, hasError: true };
    case RESET:
      return { ...state, sensors: {} };
    default:
      return state;
  }
};

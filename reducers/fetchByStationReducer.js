import {
  FETCH_BY_STATION_ID,
  LOADING_ERROR,
  RESET,
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
      const payloadData = action.payload.data;
      const sensorValue = (payloadData.values.length >= 0 && payloadData.values[0] !== undefined
          && payloadData.values[0].value != null) ? payloadData.values[0].value : 0;
      return {
        ...state,
        sensors: { ...state.sensors, [payloadData.key]: sensorValue },
        loading: false,
      };
    }
    case LOADING_ERROR:
      return { ...state, hasError: true };
    case RESET:
      return { ...state, ...INITIAL_STATE };
    default:
      return state;
  }
};

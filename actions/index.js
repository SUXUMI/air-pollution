import axios from 'axios';
import {
  FETCH_ALL_DATA,
  FETCH_BY_STATION_ID,
  LOADING_LIST,
  ADD_VALUE_FOR_SENSORS,
  RESET,
  LOADING,
  LOADING_ERROR,
} from './types';

const BASE_URL = 'http://api.gios.gov.pl/pjp-api/rest';

export function loadingList(bool) {
  return {
    type: LOADING_LIST,
    loading: bool,
  };
}

export function loading(bool) {
  return {
    type: LOADING,
    loading: bool,
  };
}

export function loadingError(bool) {
  return {
    type: LOADING_ERROR,
    hasError: bool,
  };
}

export function reset() {
  return { type: RESET };
}

export function fetchAll() {
  const URL = `${BASE_URL}/station/findAll`;
  const request = axios.get(URL);

  return (dispatch) => {
    dispatch(loadingList(true));
    request.then((response) => {
      dispatch(loadingList(false));
      return dispatch({
        type: FETCH_ALL_DATA,
        payload: response,
      });
    }).catch(() => dispatch(loadingError(true)));
  };
}

export function fetchBySensorId(id) {
  const URL = `${BASE_URL}/data/getData/${id}`;
  const request = axios.get(URL);

  return (dispatch) => {
    dispatch(loading(true));
    request.then((response) => {
      dispatch(loading(false));
      return dispatch({
        type: ADD_VALUE_FOR_SENSORS,
        payload: response,
      });
    });
  };
}

export function fetchByStationId(id) {
  const URL = `${BASE_URL}/station/sensors/${id}`;
  const request = axios.get(URL);

  return (dispatch) => {
    dispatch(loading(true));
    request.then((response) => {
      dispatch(loading(false));
      response.data.map(station => dispatch(fetchBySensorId(station.id)));
      return dispatch({
        type: FETCH_BY_STATION_ID,
        payload: response,
      });
    }).catch(() => dispatch(loadingError(true)));
  };
}


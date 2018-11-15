import axios from 'axios';
import {
  FETCH_ALL_DATA,
  FETCH_BY_STATION_ID,
  LOADING_LIST,
  ADD_VALUE_FOR_SENSORS,
  FETCH_BY_INDEX,
} from './types';

const BASE_URL = 'http://api.gios.gov.pl/pjp-api/rest/station/';

export function loading(bool) {
  return {
    type: LOADING_LIST,
    loading: bool,
  };
}

export function fetchAll() {
  const URL = `${BASE_URL}findAll`;
  const request = axios.get(URL);

  return (dispatch) => {
    dispatch(loading(true));
    request.then((response) => {
      dispatch(loading(false));
      return dispatch({
        type: FETCH_ALL_DATA,
        payload: response,
      });
    }).catch(e => console.log(e));// eslint-disable-line no-console
  };
}

export function fetchByStationId(id) {
  const URL = `${BASE_URL}sensors/${id}`;
  const request = axios.get(URL);

  return (dispatch) => {
    dispatch(loading(true));
    request.then((response) => {
      dispatch(loading(false));
      return dispatch({
        type: FETCH_BY_STATION_ID,
        payload: response,
      });
    }).catch(e => console.log(e));// eslint-disable-line no-console
  };
}

export function fetchBySensorId(id) {
  const URL = `http://api.gios.gov.pl/pjp-api/rest/data/getData/${id}`;
  const request = axios.get(URL);

  return (dispatch) => {
    dispatch(loading(true));
    request.then((response) => {
      dispatch(loading(false));
      return dispatch({
        type: ADD_VALUE_FOR_SENSORS,
        payload: response
      });
    }).catch(e => console.log(e));// eslint-disable-line no-console
  };
}

export function getIndex(id) {
  const URL = `http://api.gios.gov.pl/pjp-api/rest/aqindex/getIndex/${id}`;
  const request = axios.get(URL);

  return (dispatch) => {
    dispatch(loading(true));
    request.then((response) => {
      dispatch(loading(false));
      return dispatch({
        type: FETCH_BY_INDEX,
        payload: response,
      });
    }).catch(e => console.log(e));// eslint-disable-line no-console
  };
}

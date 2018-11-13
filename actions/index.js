import axios from 'axios';
import {
  FETCH_ALL_DATA,
  FETCH_BY_STATION_ID,
  LOADING_LIST,
  FETCH_BY_SENSOR_ID,
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
      // console.log(response.data);
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
        type: FETCH_BY_SENSOR_ID,
        payload: response,
      });
    }).catch(e => console.log(e));// eslint-disable-line no-console
  };
}

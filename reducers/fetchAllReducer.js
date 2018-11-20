import {
  FETCH_ALL_DATA,
  LOADING_LIST,
  LOADING_ERROR,
} from '../actions/types';

const INITIAL_STATE = {
  hasError: false,
  allStation: [],
  loadingList: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_ALL_DATA: {
      return {
        ...state,
        allStation: action.payload.data,
        loadingList: false,
      };
    }
    case LOADING_ERROR:
      return { ...state, hasError: true };
    case LOADING_LIST:
      return { ...state, loadingList: true };
    default:
      return state;
  }
};

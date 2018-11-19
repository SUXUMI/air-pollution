import {
  FETCH_ALL_DATA,
  LOADING_ERROR,
} from '../actions/types';

const INITIAL_STATE = {
  error: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_ALL_DATA: {
      return {
        ...state,
        allStation: action.payload.data,
      };
    }
    case LOADING_ERROR:
      return { ...state, error: 'Something went wrong' };

    default:
      return state;
  }
};

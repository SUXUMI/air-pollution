import {
  FETCH_ALL_DATA,
  LOADING_ERROR,
  RESET,
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
        loading: false,
      };
    }
    case LOADING_ERROR:
      return {...state, error: 'Something went wrong'};

   /* case RESET:
      return {};*/

    default:
      return state;
  }
};

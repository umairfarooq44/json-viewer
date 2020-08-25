import { GET_JSON_PATH, actionType } from './types';
const initialState: string[] = [];

export default function (state = initialState, action: actionType) {
  switch (action.type) {
    case GET_JSON_PATH: {
      return [...action.payload];
    }
    default: {
      return state;
    }
  }
}

import { GET_DATA } from '../types';

const initialState = {
  product: [],
};

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_DATA:
      return {
        ...state,
        product: [...payload],
      };
    default:
      return state;
  }
}

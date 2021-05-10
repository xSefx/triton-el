import { GET_DATA } from '../types';

export const getData = (data) => {
  return {
    type: GET_DATA,
    payload: data,
  };
};

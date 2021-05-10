import { ADD_TO_CART, DELETE_FROM_CART, REMOVE_FROM_CART } from '../types';

const initialState = {
  productToCart: [],
  total: 0,
};

const addToCart = (state, item) => {
  let result;
  if (state.find((el) => el.id === item.id)) {
    result = state.map((el) =>
      el.id === item.id
        ? { ...el, count: el.count + 1, total: el.total + el.price }
        : el
    );
  } else {
    result = [...state, { ...item, count: 1, total: item.price }];
  }
  return result;
};

const removeFromCart = (state, item) => {
  let result;
  const product = state.find((el) => el.id === item.id);
  if (product.count > 1) {
    result = state.map((el) =>
      el.id === item.id
        ? { ...el, count: el.count - 1, total: el.total - el.price }
        : el
    );
  } else {
    result = state.filter((el) => el.id !== item.id);
  }
  return result;
};

const deleteFromCart = (state, id) => {
  return state.filter((el) => el.id !== id);
};

const getTotalPriceItem = (state, id) => {
  const product = state.find((el) => el.id === id);
  const total = product.price * product.count;
  return total;
};

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case ADD_TO_CART:
      return {
        ...state,
        productToCart: addToCart(state.productToCart, payload),
        total: state.total + payload.price,
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        productToCart: removeFromCart(state.productToCart, payload),
        total: state.total - payload.price,
      };
    case DELETE_FROM_CART:
      return {
        ...state,
        productToCart: deleteFromCart(state.productToCart, payload),
        total: state.total - getTotalPriceItem(state.productToCart, payload),
      };
    default:
      return state;
  }
}

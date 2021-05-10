import { useSelector, useDispatch } from 'react-redux';

import { addToCart, removeFromCart, deleteFromCart } from '../../redux/actions';

import CatrTableItem from '../CartTableItem';

const CatrTable = () => {
  const { productToCart } = useSelector((state) => state.cart);
  const { product } = useSelector((state) => state.items);
  const dispatch = useDispatch();

  const addItemToCart = (id) => {
    const item = product.find((el) => el.id === id);
    dispatch(addToCart(item));
  };

  const removeItemFromCart = (id) => {
    const item = product.find((el) => el.id === id);
    dispatch(removeFromCart(item));
  };

  const deleteItem = (id) => {
    dispatch(deleteFromCart(id));
  };

  return (
    <>
      {productToCart.length !== 0 ? (
        <table className='table'>
          <thead>
            <tr>
              <th scope='col'>#</th>
              <th scope='col'>Title</th>
              <th scope='col'>Count</th>
              <th scope='col'>Price</th>
              <th scope='col'></th>
            </tr>
          </thead>
          <tbody>
            {productToCart &&
              productToCart.map((el, idx) => {
                return (
                  <CatrTableItem
                    addItemToCart={addItemToCart}
                    removeItemFromCart={removeItemFromCart}
                    deleteItem={deleteItem}
                    key={el.id}
                    {...el}
                    idx={idx}
                  />
                );
              })}
          </tbody>
        </table>
      ) : (
        <div>Корзина пуста</div>
      )}
    </>
  );
};

export default CatrTable;

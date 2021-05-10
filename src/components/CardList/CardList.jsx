import { useSelector, useDispatch } from 'react-redux';

import CardListItem from '../CardListItem';
import { addToCart } from '../../redux/actions';

import './card-list.css';

const CardList = () => {
  const { product } = useSelector((state) => state.items);
  const dispatch = useDispatch();

  const addItemToCart = (id) => {
    const item = product.find((el) => el.id === id);
    dispatch(addToCart(item));
  };

  return (
    <div className='container card-list'>
      {product &&
        product.map((item, idx) => {
          return (
            <CardListItem key={idx} {...item} addItemToCart={addItemToCart} />
          );
        })}
    </div>
  );
};

export default CardList;

import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const CartBtn = () => {
  const { total } = useSelector((state) => state.cart);

  return (
    <div className='btn btn-warning card-link'>
      <Link to='/basket'>Корзина: {total}</Link>
    </div>
  );
};

export default CartBtn;

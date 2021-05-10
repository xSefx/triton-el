import { useSelector } from 'react-redux';

import { CatrTable, PaymentDetail } from '../components';

const CartPage = () => {
  const { total } = useSelector((state) => state.cart);

  return (
    <div>
      {total !== 0 ? <PaymentDetail /> : null}
      <CatrTable />
      {total !== 0 ? (
        <div className='cart-page'>
          <span>Total: {total}</span>{' '}
          <button className='btn btn-primary'>Buy</button>
        </div>
      ) : null}
    </div>
  );
};

export default CartPage;

import './cart-table-item.css';

const CartTableItem = ({
  id,
  idx,
  title,
  price,
  count,
  total,
  removeItemFromCart,
  addItemToCart,
  deleteItem
}) => {
  return (
    <tr>
      <th scope='row'>{idx + 1}</th>
      <td>{title}</td>
      <td>
        <button onClick={() => removeItemFromCart(id)}>-</button>
        <span className='cart-count'>{count}</span>
        <button onClick={() => addItemToCart(id)}>+</button>
      </td>
      <td>Price: {total}</td>
      <td>
        <button onClick={() => deleteItem(id)}>Delete</button>
      </td>
    </tr>
  );
};

export default CartTableItem;

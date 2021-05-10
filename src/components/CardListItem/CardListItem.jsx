import './card-item.css';

const CardListItem = ({ id, title, price, addItemToCart }) => {
  return (
    <div className='card card-item' style={{ width: '18rem' }}>
      <div className='card-body'>
        <h5 className='card-title'>{title}</h5>
        <p className='card-text'>{price}</p>
        <button className='btn btn-primary' onClick={() => addItemToCart(id)}>
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default CardListItem;

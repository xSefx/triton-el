import { Link } from 'react-router-dom';

import CartBtn from '../CartBtn';

import './header.css';

const Header = () => {
  return (
    <header className='header'>
      <div>
        <Link to='/'>Some Logo</Link>
      </div>
      <CartBtn />
    </header>
  );
};

export default Header;

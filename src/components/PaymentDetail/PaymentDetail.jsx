import { useState, useEffect } from 'react';

import './paymant.scss';

const PaymentDetail = () => {
  const [cartNumber, setCartNumber] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [cvv, setCvv] = useState('');
  const [cartData, setCartData] = useState(null);

  const getCartData = async () => {
    const response = await fetch(
      `https://api.cardinfo.online?input=${cartNumber.slice(
        0,
        6
      )}&apiKey=0a55e2ffea1d584f02bb03213a2480af`
    );

    if (response.status !== 200) {
      return console.log('ошибка!');
    }

    const data = await response.json();
    setCartData(data);
  };

  useEffect(() => {
    if (cartNumber.length >= 6 && cartData === null) {
      return getCartData();
    }
    if (cartNumber.length < 6 && cartData !== null) {
      return setCartData(null);
    }
  }, [cartNumber]);

  const getLengthField = (type) => {
    switch (type) {
      case 'cartNumber':
        return 16;
      case 'year':
        return 2;
      case 'month':
        return 2;
      case 'cvv':
        return 3;
      default:
        return 0;
    }
  };

  const setValue = (value, cb, type) => {
    const length = getLengthField(type);

    if (!isNaN(value) && value.length <= length) {
      cb(value);
    }
  };

  return (
    <div className='cards'>
      <div
        className='front card'
        style={{
          background: cartData ? cartData.formBackgroundColor : '',
          color: cartData ? cartData.formTextColor : '',
          borderColor: cartData ? cartData.formBorderColor : '',
        }}
      >
        <img
          className='bank-logo'
          alt='bank-logo'
          style={{
            display: cartData && cartData.formBankLogoBigSvg ? 'block' : 'none',
          }}
          src={cartData ? cartData && cartData.formBankLogoBigSvg : ''}
        />
        <img
          className='brand-logo'
          alt='brand-logo'
          style={{
            display:
              cartData &&
              (cartData.formBrandLogoSvg || cartData.brandLogoOriginalSvg)
                ? 'block'
                : 'none',
          }}
          src={
            cartData
              ? cartData.formBrandLogoSvg || cartData.brandLogoOriginalSvg
              : ''
          }
        />
        <div className='fields'>
          <input
            className='field number'
            type='text'
            placeholder='0000 0000 0000 0000'
            value={cartNumber}
            onChange={({ target: { value } }) =>
              setValue(value, setCartNumber, 'cartNumber')
            }
          />
          <label className='label'>Valid thru</label>
          <input
            className='field expired'
            type='text'
            placeholder='MM'
            value={month}
            onChange={({ target: { value } }) =>
              setValue(value, setMonth, 'month')
            }
          />
          <input
            className='field expired'
            type='text'
            placeholder='YY'
            value={year}
            onChange={({ target: { value } }) =>
              setValue(value, setYear, 'year')
            }
          />
        </div>
      </div>
      <div className='back card'>
        <input
          className='field code'
          type='password'
          value={cvv}
          onChange={({ target: { value } }) => setValue(value, setCvv, 'cvv')}
        />
        <label className='label'>Safety code</label>
      </div>
    </div>
  );
};

export default PaymentDetail;

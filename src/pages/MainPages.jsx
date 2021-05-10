import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { CardList } from '../components';
import { data } from '../mock/mockup-data.js';
import { getData } from '../redux/actions';

const MainPages = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getData(data));
  });

  return (
    <div>
      <CardList />
    </div>
  );
};

export default MainPages;

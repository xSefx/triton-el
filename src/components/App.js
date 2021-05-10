import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './Header';
import { CartPage, MainPages } from '../pages';

const App = () => {
  return (
    <BrowserRouter>
      <div className='container'>
        <Header />
        <Switch>
          <Route path='/' exact component={MainPages} />
          <Route path='/basket' component={CartPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;

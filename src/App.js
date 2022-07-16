import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './page/Home';
import About from './page/About';
import Login from './page/Login';
import Logout from './page/Logout';
import Layout from './Layout/Layout';
import PrivateRoute from './Layout/PrivateRoute';
import PublicRoute from './Layout/PublicRoute';
import Product from './page/Product';
import Register from './page/Register';

import USers from './page/Users';

class App extends React.Component {
  render() {
    return (
      <div className='app'>
        <BrowserRouter>
          <Switch>
            <PublicRoute exact path='/' component={Home} layout={Layout} />
            <PrivateRoute
              exact
              path='/about'
              component={About}
              layout={Layout}
            />
            <PrivateRoute
              exact
              path='/product'
              component={Product}
              layout={Layout}
            />

            <PrivateRoute
              exact
              path='/users'
              component={USers}
              layout={Layout}
            />

            <Route exact path='/login' component={Login} />
            <Route exact path='/logout' component={Logout} />
            <Route exact path='/register' component={Register} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;

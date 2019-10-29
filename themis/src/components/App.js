import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { withRouter } from 'react-router';
import HeaderWithRouter from './Header';
import routerPropTypes from './routerPropTypes';
import * as Views from '../views/index.js';

class App extends React.Component {
  static propTypes = routerPropTypes;

  render() {
    const background = this.props.location.pathname === '/' ? 'dark' : 'light';

    return (
      <div className={'min-vh-100 bg-' + background}>
        <HeaderWithRouter />
        <main>
          <Switch>
            <Route exact path='/' component={Views.Home}/>
            <Route path='/experiments' component={Views.Experiments}/>
            <Route path='/results' component={Views.Results}/>
            <Route path='/about' component={Views.About}/>
            <Route path='/signin' component={Views.SignIn}/>
            <Route path='/signup' component={Views.SignUp}/>
          </Switch>
        </main>
      </div>
    );
  }
}

const AppWithRouter = withRouter(App);

export default AppWithRouter;

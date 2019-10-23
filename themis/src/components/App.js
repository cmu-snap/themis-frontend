import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import * as Views from '../views/index.js';

function App() {
  return (
    <div>
      <Header />
      <Main />
    </div>
  );
}

function Main() {
  return (
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
  );
}

export default App;

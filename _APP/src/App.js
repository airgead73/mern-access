import { NotFound } from './comps/pages';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './comps/pages/Home';
import Login from './comps/pages/Login';
import MainDashboard from './comps/pages/MainDashboard';

function App() {

  return (
    <Switch>
      <Route exact path='/'>
        <Home/>
      </Route>
      <Route path='/dashboard'>
        <MainDashboard/>
      </Route> 
      <Route path='/login'>
        <Login/>
      </Route>
      <Route path='*'>
        <NotFound/>
      </Route>                   
    </Switch>
  )
}

export default App;
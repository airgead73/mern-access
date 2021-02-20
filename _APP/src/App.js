import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import MainDashboard from './pages/MainDashboard';
import NotFound from './pages/NotFound';

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
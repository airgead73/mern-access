import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ThemeContext, ThemeProvider } from './contexts/theme';
import Home from './pages/Home';
import Login from './pages/Login';
import MainDashboard from './pages/MainDashboard';
import NotFound from './pages/NotFound';

const Button = () => {
  const { theme, toggleTheme } = React.useContext(ThemeContext);
  return (
    <button className={theme} onClick={() => toggleTheme()}>toggle theme</button>
  )  
}

const Message = () => {
  const { theme } = React.useContext(ThemeContext);
  return (
    <p>Current theme: {theme}</p>
  )
}

function App() {

  return (
    <ThemeProvider>
      <Button/>
      <Message/>
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
    </ThemeProvider>
  )
}

export default App;
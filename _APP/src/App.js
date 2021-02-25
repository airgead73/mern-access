import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { AuthContext, AuthProvider } from './contexts/authentication';
import Layout from './layout';
import Home from './pages/Home';
import Login from './pages/Login';
import MainDashboard from './pages/MainDashboard';
import NotFound from './pages/NotFound';
import Projects from './pages/Projects';

const PrivateRoute = ({ children, ...rest }) => {
  const auth = React.useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={() =>
        auth.isAuthenticated() ? (
         <React.Fragment>{children}</React.Fragment>
        ) : (
          <Redirect to="/" />
        )
      }
    ></Route>
  );
};

const AppRoutes = () => {
  return (
    <Switch>
      <Route exact path='/'>
        <Home/>
      </Route>
      <PrivateRoute path='/dashboard'>
        <MainDashboard/>
      </PrivateRoute>
      <PrivateRoute path='/projects'>
        <Projects/>
      </PrivateRoute>        
      <Route path='/login'>
        <Login/>
      </Route>
      <Route path='*'>
        <NotFound/>
      </Route>                   
    </Switch>
  )
}

function App() {

  return (

    <AuthProvider>
      <Layout>
        <AppRoutes/>
      </Layout>
    </AuthProvider>

  )
}

export default App;
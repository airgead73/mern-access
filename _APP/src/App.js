import React, { lazy, Suspense } from 'react';
import { Auth0Provider, useAuth0 } from '@auth0/auth0-react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import Layout from './layout';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

const MainDashboard = lazy(() => import('./pages/MainDashboard'));

const PrivateRoute = ({ children, ...rest }) => {
  const { isAuthenticated } = useAuth0();
  return (
    <Route
      {...rest}
      render={() =>
        isAuthenticated ? (
         <React.Fragment>{children}</React.Fragment>
        ) : (
          <Redirect to="/" />
        )
      }
    ></Route>
  );
};

const AppRoutes = () => {
  const { isLoading } = useAuth0();
  if(isLoading) {
    return <div>Loading...</div>
  }
  return (
    <Suspense fallback={<div>loading...</div>}>
    <Switch>
      <Route exact path='/'>
        <Home/>
      </Route>    
      <PrivateRoute path='/dashboard'>
        <MainDashboard/>
      </PrivateRoute> 
      <Route path='*'>
        <NotFound/>
      </Route>                   
    </Switch>
    </Suspense>
  )
}

function App() {

  return (
    <Auth0Provider
      domain="orbitsecurity.us.auth0.com"
      clientId="48c3lSyoS8joZgVUloMALqQbBvy60Mta"
      redirectUri={`${window.location.origin}/dashboard`}
      audience="https://api.orbit/"
    >
      <Router>
          <Layout>
            <AppRoutes/>
          </Layout>
      </Router> 
    </Auth0Provider>

  );

}

export default App;
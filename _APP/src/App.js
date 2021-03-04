import React, { lazy, Suspense } from 'react';
import { Auth0Provider } from '@auth0/auth0-react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { AuthContext, AuthProvider } from './contexts/authentication';
import Layout from './layout';
import Home from './pages/Home';
import Login from './pages/Login';
//import MainDashboard from './pages/MainDashboard';
import NotFound from './pages/NotFound';
//import Projects from './pages/Projects';
//import Signup from './pages/Signup';

const MainDashboard = lazy(() => import('./pages/MainDashboard'));
const Projects = lazy(() => import('./pages/Projects'));
const Signup = lazy(() => import('./pages/Signup'));

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
    <Suspense fallback={<div>loading...</div>}>
    <Switch>
      <Route exact path='/'>
        <Home/>
      </Route>
      <Route path='/login'>
        <Login/>
      </Route>      
      <PrivateRoute path='/dashboard'>
        <MainDashboard/>
      </PrivateRoute>
      <PrivateRoute path='/projects'>
        <Projects/>
      </PrivateRoute>  
      <PrivateRoute path='/signup'>
        <Signup/>
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
      domain="dev-qj-2o3b9.us.auth0.com"
      clientId="DOROFtSIdkCaCLfWhX5M4Inu9Uik390M"
      redirectUri={`${window.location.origin}/dashboard`}
    >
      <Router>
        <AuthProvider>
          <Layout>
            <AppRoutes/>
          </Layout>
        </AuthProvider>
      </Router>
    </Auth0Provider>

  )
}

export default App;
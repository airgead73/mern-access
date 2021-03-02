import React, { lazy, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
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

    <AuthProvider>
      <Layout>
        <AppRoutes/>
      </Layout>
    </AuthProvider>

  )
}

export default App;
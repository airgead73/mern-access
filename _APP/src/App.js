import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import Layout from './layout';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

const MainDashboard = lazy(() => import('./pages/MainDashboard'));

const PrivateRoute = ({ children, ...rest }) => {
  const isAuthenticated = true;
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

      <Router>
        <AuthProvider>
          <Layout>
            <AppRoutes/>
          </Layout>
        </AuthProvider>
      </Router> 

  );

}

export default App;
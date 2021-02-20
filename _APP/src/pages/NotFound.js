import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const NotFound = () => {
  const { pathname } = useLocation();
  return ( 
    <React.Fragment>
      <h2>Sorry</h2>
      <p>Page <code>{pathname}</code> can't be found.</p>
      <Link to='/'>Back to home page...</Link>
    </React.Fragment>
   );
}
 
export default NotFound;
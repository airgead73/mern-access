import React from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/authentication';

const Nav = (props) => {

  const auth = React.useContext(AuthContext);

  return ( 
    <nav>
      <ul>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/login">login</Link>
        </li>
        {auth.isAuthenticated() && (
          <li>
            <Link to="/dashboard">dashboard</Link>
          </li>
        )}
      </ul>
    </nav>
   );
}
 
export default Nav;
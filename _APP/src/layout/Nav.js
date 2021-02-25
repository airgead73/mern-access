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
          <React.Fragment>

          <li>
            <Link to="/dashboard">dashboard</Link>
          </li>
          <li>
            <Link to="/projects">projects</Link>
          </li>          
          </React.Fragment>
        )}
      </ul>
    </nav>
   );
}
 
export default Nav;
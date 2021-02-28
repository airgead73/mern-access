import React from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/authentication';

const Nav = (props) => {  

  return ( 
    <nav>
      <ul>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/login">login</Link>
        </li>
        <li>
          <Link to="/signup">signup</Link>
        </li>   
        <li>
          <Link to="/dashboard">dashboard</Link>
        </li>
        <li>
          <Link to="/projects">projects</Link>
        </li> 
      </ul>
    </nav>
   );
}
 
export default Nav;
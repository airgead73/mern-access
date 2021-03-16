import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {  

 return ( 
    <nav>
      <ul>
        <li>
          <Link to="/">home</Link>          
        </li> 
        <li>
          <Link to="/dashboard">dashboard</Link>
        </li>
      </ul>
    </nav>
   );

}
 
export default Nav;
import React from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/authentication';

const Nav = () => {  

  const { isAuthenticated } = React.useContext(AuthContext);

  const PublicLinks = () => {
    return (

        <li>
          <Link to="/">home</Link>
        </li>      
      
    )
  }

  const NoAuthLinks = () => {
    return (
      
        <li>
          <Link to={isAuthenticated() ? "/dashboard" : "/login"}>login</Link>
        </li>       

    )   
  }

  const PrivateLinks = () => {
    return (
      <React.Fragment>
        <li>
          <Link to={isAuthenticated() ? "/signup" : "/login"}>add user</Link>
        </li>   
        <li>
          <Link to={isAuthenticated() ? "/dashboard" : "/login"}>dashboard</Link>
        </li>
        <li>
          <Link to={isAuthenticated() ? "/projects" : "/login"}>projects</Link>
        </li> 
      </React.Fragment>
    )
   
  }

  return ( 
    <nav>
      <PublicLinks/>
      {!isAuthenticated() && (<NoAuthLinks/>)}
      {isAuthenticated() && (<PrivateLinks/>)}
    </nav>
   );
}
 
export default Nav;
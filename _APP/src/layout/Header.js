import React from 'react';
import { AuthContext } from '../contexts/authentication';
import { useAuth0 } from '@auth0/auth0-react'

const Header = (props) => {

  const { loginWithRedirect, logout } = useAuth0();

  return ( 
    <header>
      <h1>project manager</h1>
      
      <button onClick={loginWithRedirect}>login</button>
      <button onClick={() => logout({ returnTo: window.location.origin })}>logout</button>
      
      
    </header>
   );
}
 
export default Header;
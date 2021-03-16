import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Header = () => {

  const { 
    loginWithRedirect,
    logout,
    user,
    isAuthenticated
  } = useAuth0();

  return ( 
    <header>
      <h1>project manager {' '} 
        {user && <span>{user.name}</span>}        
      </h1>  
      <h2>
        <button onClick={loginWithRedirect}>login</button>{' '}
        <button onClick={() => logout({ returnTo: window.location.orgin})}>logout</button>
      </h2> 
    </header>
   );

}
 
export default Header;
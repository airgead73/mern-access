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
      <h1>project manager</h1>  
      {isAuthenticated && <p>
        <small>{user.name}</small>
      </p>}
      <h2>
        {!isAuthenticated &&<button onClick={loginWithRedirect}>login</button>}
        {isAuthenticated && <button onClick={() => logout({ returnTo: window.location.orgin})}>logout</button>}     
      </h2> 
    </header>
   );

}
 
export default Header;
import React from 'react';
import { AuthContext } from '../contexts/authentication';
import { useAuth0 } from '@auth0/auth0-react'

const Header = (props) => {

  const { authState, logout, isAuthenticated } = React.useContext(AuthContext);
  const { loginWithRedirect } = useAuth0;

  return ( 
    <header>
      <h1>project manager</h1>
      <p>{authState.userInfo.firstName}</p>
      <button onClick={loginWithRedirect}>login</button>
      {isAuthenticated() && (<button onClick={() => logout()}>logout</button>)}
      
    </header>
   );
}
 
export default Header;
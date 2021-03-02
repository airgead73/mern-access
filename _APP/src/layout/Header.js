import React from 'react';
import { AuthContext } from '../contexts/authentication';

const Header = (props) => {

  const { authState, logout, isAuthenticated } = React.useContext(AuthContext);

  return ( 
    <header>
      <h1>project manager</h1>
      <p>{authState.userInfo.firstName}</p>
      {isAuthenticated() && (<button onClick={() => logout()}>logout</button>)}
      
    </header>
   );
}
 
export default Header;
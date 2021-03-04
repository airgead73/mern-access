import React from 'react';
import { AuthContext } from '../contexts/authentication';

const Header = (props) => {

  const { authState, logout, isAuthenticated } = React.useContext(AuthContext);

  return ( 
    <header>
      <h1>project manager</h1>
     
      {isAuthenticated() && (<button onClick={() => logout()}>logout</button>)}
      
    </header>
   );
}
 
export default Header;
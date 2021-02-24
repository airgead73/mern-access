import React from 'react';
import { AuthContext } from '../contexts/authentication';

const Header = (props) => {

  const auth = React.useContext(AuthContext);

  return ( 
    <header>
      <h1>project manager</h1>
      <p>{auth.isAuthenticated() ? 'userlogged in' : 'user is NOT logged in'}</p>
    </header>
   );
}
 
export default Header;
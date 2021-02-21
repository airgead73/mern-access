import React from 'react';
import { ThemeContext } from '../contexts/theme';

const Home = () => {  

  const { theme } = React.useContext(ThemeContext);

  return ( 
    <React.Fragment>
      <h1 className={`h1 ${theme}`}>Home page</h1>
    </React.Fragment>
    
   );
}
 
export default Home;
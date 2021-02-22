import React from 'react';

const Nav = (props) => {
  return ( 
    <nav>
      <h1>Nav</h1>
      { props.children }
    </nav>
   );
}
 
export default Nav;
import React from 'react';

const Footer = (props) => {
  return ( 
    <footer>
      <h1>Footer</h1>
      { props.children }
    </footer>
   );
}
 
export default Footer;
import React from 'react';
import Header from './Header';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';


const Layout = (props) => {
  return ( 

    <React.Fragment>

      <Header/>
      <Nav/>
      <Main>
        {props.children}
      </Main>
      <Footer/>

    </React.Fragment>

   );
}
 
export default Layout;
import React from 'react';

const Main = (props) => {
  return ( 
    <main>
      <h1>Main</h1>
      { props.children }
    </main>
   );
}
 
export default Main;
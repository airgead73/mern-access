import React from 'react';
import { useLocation, useParams, useRouteMatch } from 'react-router-dom';

const Detail = () => {

  const location = useLocation();
  const { id, title, code, author } = location.state;

  return ( 
    <React.Fragment>
      <h3>{code} {title}</h3>
      <p>by {author}</p> 
    </React.Fragment>
   );
}
 
export default Detail;
import React from 'react';
import { Link, Route, useRouteMatch } from 'react-router-dom';
import projects from './../../../data/projects';
import Detail from './Detail';

const Dashboard = () => {

  const { path, url } = useRouteMatch();

  return ( 
    <React.Fragment>
      <h2>Projects</h2>
      {projects.map(({ id, title, code, author }) => (
        <li key={id}>          
          <Link to={{
            pathname: `${url}/${id}`,
            state: {
              id,
              title,
              code,
              author 
            }
          }}>
            {code} {title}
          </Link>
        </li>
      ))}

      <hr/>

      <Route path={`${path}/:projectID`}>
        <Detail/>
      </Route>
      
    </React.Fragment>
   );
}

export default Dashboard;
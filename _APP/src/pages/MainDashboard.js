import React from 'react';
import useGet from '../fetch/useGet';

const ProjectList = ({ projects }) => {
  return ( 
    <React.Fragment>
      {projects.map((project) => (
        <article className="project-preview" key={project._id}>
          <h3>{ project.title }</h3>
          <p>written by { project.author }</p>
          
        </article>
      ))}
    </React.Fragment>
   );
}

const MainDashboard = () => { 

  const { data: projects, isLoading, error } = useGet('/api/projects');

  return ( 
    <React.Fragment>
        {error && <p>{ error }</p>}
        {isLoading && <p>Loading...</p>}      
      <h1>Main Dashboard</h1> 
      {projects && <ProjectList projects={projects}/>}         
    </React.Fragment>
   );
}
 
export default MainDashboard;
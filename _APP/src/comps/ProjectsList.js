import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const ProjectsList = () => {
  const { getAccessTokenSilently } = useAuth0();
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    const abortConstant = new AbortController();

    const getData = async () => {
      
      try {

        const response = await fetch('/api/projects', { signal: abortConstant.signal});
        const json = await response.json();
        console.log('json:', json)
        const { results } = json;
        setData(results);
        console.log('results',results);
        setIsLoading(false);

      } catch(err) {
        if(err.name === 'AbortError') {
          console.log('fetch aborted')
        } else {
          setIsLoading(false);
        }
      }

    }

    getData();

    return () => abortConstant.abort();
    // fetch('/api/projects', {
    //   signal: abortConstant.signal
    // })
    // .then(response => {
    //   if(!response.ok) {
    //     throw Error('Could not fetch data for that resource')
    //   }
    //   console.log(response);
    //   return response.json();
    // })
    // .then((data) => {
    //   setData(data.results);
    //   console.log(data.results);
    //   setIsLoading(false);
    // })
    // .catch((err) => {
    //   if(err.name === 'AbortError') {
    //     console.log('fetch aborted')
    //   } else {
    //     setIsLoading(false);
    //   }
    // })


    //return () => abortConstant.abort();


  },[])

  return (
    <React.Fragment>
      {isLoading && <p>Loading projects...</p>}
      {data && (
        <ul>
          {data.map((item) => {
            return <li key={item._id}>{item.title}</li>
          })}
        </ul>
      )}
    </React.Fragment>
  )



};

export default ProjectsList;
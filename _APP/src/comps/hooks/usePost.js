import React from 'react';

const usePost = (url, body) => {
  const [data, setData] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {   
    
      fetch(url, {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      })
      .then(response => {
        if(!response.ok) {
          throw Error('Could not fetch data for that resource.')
        }
          console.log(response)
          return response.json()
      })
      .then((data) => {
        setData(data.results);
        setIsLoading(false);
        setError(null);
      })
      .catch((err) => {
          setError(err.message);
          setIsLoading(false); 
      });       

  },[url]);  

  return { data, isLoading, error }

}

export default usePost;
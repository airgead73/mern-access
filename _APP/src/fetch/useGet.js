import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const useGet = (url) => {
  const [data, setData] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  const [accessToken, setAccessToken] = useState();
  const { getAccessTokenSilently } = useAuth0(); 

  const getAccessToken = async () => {
    try {
      const token = await getAccessTokenSilently();
      setAccessToken(token);
    } catch(err) {
      console.log(err);
    }
  }

  getAccessToken();


  console.log('get projects')

  React.useEffect(() => {

    const abortConstant = new AbortController();

    setTimeout(() => {
      fetch(url, { 
        signal: abortConstant.signal,
        headers: { 'Authorization': `Bearer ${token}`}
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
          console.log(data.results)
        })
        .catch((err) => {
          if(err.name === 'AbortError') {
            console.log('fetch aborted')
          } else {
            setError(err.message);
            setIsLoading(false);
          }

        })
    }, 1000);

    return () => abortConstant.abort();

  },[url]);  

  return { data, isLoading, error }

}

export default useGet;
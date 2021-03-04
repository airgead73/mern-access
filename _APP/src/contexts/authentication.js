import React from 'react';
import { useHistory } from 'react-router-dom';

const AuthContext = React.createContext();
const { Provider } = AuthContext;

const AuthProvider = ({children}) => {
  const history = useHistory();

  const token = localStorage.getItem('token');
  const userInfo = localStorage.getItem('userInfo');
  const expiresAt = localStorage.getItem('expiresAt');

  const [authState, setAuthState] = React.useState({
    token,
    expiresAt,
    userInfo: userInfo ? JSON.parse(userInfo) : {}
  });

  // React.useEffect(() => {
  //   const getUserInfo = async () => {
  //     try {

  //       fetch('/api/authenticate/user-info')
  //         .then(response => {
  //           if(!response.ok) {
  //             throw Error('Could not fetch data')
  //           }
  //           return response.json();
  //         })
  //         .then((data) => {
  //           console.log(data)
  //         })

  //     } catch(err) {
  //       console.log(err)
  //     }
  //   }
  //   getUserInfo()

  // }, []);

  const setAuthInfo = ({ token, userInfo, expiresAt }) => {
    localStorage.setItem('token', token);
    localStorage.setItem(
      'userInfo',
      JSON.stringify(userInfo)
    );
    localStorage.setItem('expiresAt', expiresAt);

    setAuthState({
      token,
      userInfo,
      expiresAt
    });
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userInfo');
    localStorage.removeItem('expiresAt');
    setAuthState({});
    history.push('/login');
  };

  const isAuthenticated = () => {
    if (!authState.token || !authState.expiresAt) {
      return false;
    }
    return (
      new Date().getTime() / 1000 < authState.expiresAt
    );
  };

  const isAdmin = () => {
    return authState.userInfo.role === 'admin';
  };

  return (
    <Provider
      value={{
        authState,
        setAuthState: authInfo => setAuthInfo(authInfo),
        isAuthenticated,
        isAdmin,
        logout
      }}
    >
      {children}
    </Provider>
  )

}

export {
  AuthContext, 
  AuthProvider
};
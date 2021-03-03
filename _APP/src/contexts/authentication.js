import React from 'react';
import { useHistory } from 'react-router-dom';
import useGet from '../fetch/useGet';

const AuthContext = React.createContext();
const { Provider } = AuthContext;

const AuthProvider = ({children}) => {
  const history = useHistory();
  const userInfo = localStorage.getItem('userInfo');
  const expiresAt = localStorage.getItem('expiresAt');

  const [authState, setAuthState] = React.useState({
    token: null,
    expiresAt,
    userInfo: userInfo ? JSON.parse(userInfo) : {}
  });

  const setAuthInfo = ({ token, userInfo, expiresAt }) => {
    
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
    localStorage.setItem('expiresAt', expiresAt);

    setAuthState({
      token,
      userInfo,
      expiresAt
    });

  }

  const isAuthenticated = () => {
    if(!authState.expiresAt) {
      return false;
    }
    return new Date().getTime() / 1000 < authState.expiresAt;
  }

  const isAdmin = () => {
     return authState.userInfo.role === 'admin';
  }

  const logout = () => {
    fetch('/api/authenticate/logout')
    .then((response) => {
      if(!response.ok) {
        throw Error('Could not fetch complete fetch.')
      } else {
        return response.json()
      }
    })
    .then((data) => {
      console.log(data.success);
      if(data.success) {
        localStorage.removeItem('userInfo');
        localStorage.removeItem('expiresAt');
        setAuthState({
          token: null,
          expiresAt: null,
          userInfo: {}
        });
        history.push('/login')
      }

    })
    .catch((err) => {
      console.warn(err);
    });    

    
  }

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
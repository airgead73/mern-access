import React from 'react';
import { useHistory } from 'react-router-dom';

const AuthContext = React.createContext();
const { Provider } = AuthContext;

const AuthProvider = ({children}) => {

  const history = useHistory();
  const userInfo = localStorage.getItem('userInfo');
  const expiresAt = localStorage.getItem('expiresAt');

  const [authState, setAuthState] = React.useState({
    expiresAt,
    userInfo: userInfo ? JSON.parse(userInfo) : {}
  });

  const setAuthInfo = ({ userInfo, expiresAt}) => {
    localStorage.setItem(
      'userInfo',
      JSON.stringify(userInfo)
    );
    localStorage.setItem('expiresAt', expiresAt);

    setAuthState({
      userInfo,
      expiresAt
    });
  }

  const logout = () => {
    localStorage.removeItem('userInfo');
    localStorage.removeItem('expiresAt');
    setAuthState({});
    history.push('/login');
  };

  const isAuthenticated = () => {
    if (!authState.expiresAt || !authState.userInfo) {
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
        logout,
        isAuthenticated,
        isAdmin
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
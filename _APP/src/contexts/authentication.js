import React from 'react';
import { useHistory } from 'react-router-dom';

const AuthContext = React.createContext();
const { Provider } = AuthContext;

const AuthProvider = ({children}) => {

  const [authState, setAuthState] = React.useState({
    token: null,
    expiresAt: null,
    userInfo: {}
  });

  const setAuthInfo = ({ token, userInfo, expiresAt }) => {

    setAuthState({
      token,
      userInfo,
      expiresAt
    });

  }



  return (
    <Provider
      value={{
        authState,
        setAuthState: authInfo => setAuthInfo(authInfo)
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
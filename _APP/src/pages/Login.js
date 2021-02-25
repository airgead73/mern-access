import React from 'react';
import { AuthContext } from '../contexts/authentication';

const Login = () => {  
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const authContext = React.useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const credentials = {
      email,
      password
    };

    fetch('api/authenticate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify(credentials)
    })
    .then((response) => {
      if(!response.ok) {
        throw Error('Could not fetch data for that resource.')
      } else {
        return response.json()
      }
    })
    .then((data) => {
      console.log(data);
      authContext.setAuthState(data);
    })
    .catch((err) => {
      console.warn(err)
    });

  }

  return ( 

    <form onSubmit={(e) => handleSubmit(e)}>
      <fieldset>
        <legend>log in to application</legend>
        <label htmlFor="email">email</label>
        <input 
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email..."
          autoComplete="off"
        />
        <label htmlFor="password">password</label>
        <input 
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}          
          placeholder="password..."
          autoComplete="off"
        /> 
        <hr/>
        <button type="submit">submit credentials</button>       
      </fieldset>
    </form>
    
   );
}
 
export default Login;
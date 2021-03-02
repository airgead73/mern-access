import React from 'react';
import { Redirect } from 'react-router-dom';
import { AuthContext } from '../contexts/authentication';

const Login = () => { 
  const authContext = React.useContext(AuthContext);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [success, setSuccess] = React.useState(false);
  const [message, setMessage] = React.useState('');

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
      setMessage('successful login');
      setTimeout(() => {
        setSuccess(true);        
      }, 700)
    })
    .catch((err) => {
      console.warn(err);
      setSuccess(false);
      setMessage('login failed');
    });

  }

  return ( 

    <React.Fragment>

      {success && <Redirect to="/dashboard"/>}
      <p>{message}</p>

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

    </React.Fragment>

    
   );
}
 
export default Login;
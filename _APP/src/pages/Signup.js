import React from 'react';
import { AuthContext } from '../contexts/authentication';

const Signup = () => { 
  const authContext = React.useContext(AuthContext);
  const [firstName, setFirstName] = React.useState('');  
  const [lastName, setLastName] = React.useState(''); 
  const [role, setRole] = React.useState(''); 
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const credentials = {
      firstName,
      lastName,
      role,
      email,
      password
    };

    fetch('api/users', {
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
        <legend>add user</legend>
        <label htmlFor="firstName">first name</label>
        <input 
          type="text"
          name="firstName"
          required
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="first name..."
          autoComplete="off"
        />
        <label htmlFor="role">last name</label>
        <input 
          type="text"
          name="lastName"
          required
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="last name..."
          autoComplete="off"
        />
        <label htmlFor="role">role</label>
        <input 
          type="text"
          name="role"
          required
          value={role}
          onChange={(e) => setRole(e.target.value)}
          placeholder="'admin' or 'user'..."
          autoComplete="off"
        />                          
        <label htmlFor="email">email</label>
        <input 
          type="email"
          name="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email..."
          autoComplete="off"
        />
        <label htmlFor="password">password</label>
        <input 
          type="password"
          name="password"
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
 
export default Signup;
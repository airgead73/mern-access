import React from 'react';

const Login = () => {  
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('email: ', email);
    console.log('password: ', password);
    setEmail('');
    setPassword('')
  }

  return ( 

    <form onSubmit={handleSubmit}>
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
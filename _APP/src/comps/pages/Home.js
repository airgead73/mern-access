import React from 'react';

const Home = () => {  

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isPending, setIsPending] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);
  const [user, setUser] = React.useState('');

  const handleSubmit = (e) => {

    e.preventDefault();

    const credentials = {
      email,
      password
    }

    setIsPending(true);

    fetch('/api/authenticate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify(credentials)
    })
    .then((response) => {
      if(!response.ok) {
        throw Error('Could not fetch data for that resource.')
      }
      console.log(response)
      return response.json()
    })
    .then((data) => {
      setIsPending(false);
      setUser({
        name: `${data.userInfo.firstName} ${data.userInfo.lastName}`
      })
      setIsSuccess(true);
      console.log(data)
    })
    .catch((err) => {
      setIsPending(false);
      console.error(err.message);
    })

  }

  return ( 
    <React.Fragment>
      {isPending && <p>pending...</p>}
      {isSuccess && <p>{user.name} is logged in.</p>}
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>sign in</legend>
          <label htmlFor="email">email</label>
          <input 
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            id="email"
            autoComplete="false"           
          />
          <label htmlFor="password">password</label>
          <input 
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}            
            name="password"
            id="password"
            autoComplete="false"
          />   
          <button type="submit">sign in</button>       
        </fieldset>
      </form>
    </React.Fragment>
    
   );
}
 
export default Home;
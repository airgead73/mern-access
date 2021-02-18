import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import NotFound from './comps/pages/NotFound';
import Home from './comps/pages/Home';
import MainDashboard from './comps/pages/MainDashboard';

function generateId() {
  return '_' + Math.random().toString(36).substr(2,9);
}

function App() {
  const [input, setInput] = React.useState('');

  React.useEffect(() => {
    document.title = `${240 - input.length} characters left.`
  },[input]);

  return (
    <div>
      <textarea
        type="text"
        value={input} 
        onChange={(e) => setInput(e.target.value)}
        cols="30" 
        rows="10"
        placeholder="type..."
      ></textarea>
      <br/>
      <button
        onClick={() => console.log(input)} 
        disabled={input.length === 0 || input.length > 240}
      >post</button>



    </div>
  )
}

export default App;
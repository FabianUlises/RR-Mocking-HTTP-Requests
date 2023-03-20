import React, { useEffect, useState } from 'react'
import './App.css'


function App() {
  // State
  const [gitHubName, setGitHubName] = useState('');
  useEffect(() => {
    fetch('http://api.github.com/users/FabianUlises')
    .then(res => res.json())
    .then(data => {
      setGitHubName(data.name);
      console.log(data.bio);
    })
    .catch(err => console.log('==== ERROR ====', err));
  }, []);
  return (
    <div className="App">
      <h1>Github Profile Info:</h1>
      <h2>{gitHubName}</h2>
    </div>
  );
}

export default App;
import React, {useState} from 'react';
import './App.css';
import Tweet from './Tweet'

function App() {
  const [users, setUsers] = useState([
    {name: "Ed", message:"hello there", likes: "500"},
    {name: "John", message:"Iam the true king", likes: "800"},
    {name: "Travesy", message:"My new channel is available", likes: "900"},
    {name: "Mosh", message:"Welcome to my channel", likes: "400"},
    {name: "Brian", message:"Iam a React Developer", likes: "1000"}
  ]);

  return (
    <div className="App">
      {users.map(user =>(
        <Tweet name={user.name} message={user.message} likes={user.likes}/>
      ))}
      
    </div>
  );
}

export default App;

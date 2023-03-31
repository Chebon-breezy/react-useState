import React, {useState} from 'react';
import './App.css';
import Tweet from './Tweet'

function App() {
  const [users, setUsers] = useState([
    {name: "Ed", message:"hello there", likes: "500", date: "Aug 14th"},
    {name: "John", message:"Iam the true king", likes: "800", date: "Aug 13th"},
    {name: "Travesy", message:"My new channel is available", likes: "900", date: "Aug 14"},
    {name: "Mosh", message:"Welcome to my channel", likes: "400", date: "Aug 12"},
    {name: "Brian", message:"Iam a React Developer", likes: "1000", date: "Aug 15"}
  ]);

  return (
    <div className="App">
      {users.map(user =>(
        <Tweet name={user.name} message={user.message} likes={user.likes} date={user.date}/>
      ))}
      
    </div>
  );
}

export default App;

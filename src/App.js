
import { useEffect, useState } from 'react';
import './App.css';
import User from './Components/User/User';
import data from './data/data.json';

function App() {
  const [user, setUser] = useState([])
  const [addFriend, setAddFriend] = useState([]);
  const handleAddFriend = (user) => {
    const setNewFriend=[...addFriend,user]
    setAddFriend(setNewFriend);
  }

  useEffect(() => {
    setUser(data)
    
  }, [])
  return (
    <div>
      <div>
        <User userData={user} handleFriend={handleAddFriend} getFriendInfo={addFriend}></User>
      </div>
      <div>

      </div>
    </div>
  );
}

export default App;

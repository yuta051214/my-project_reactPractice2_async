import logo from './logo.svg';
import './App.css';
import User from './User';
import { useState } from 'react';

function App() {
  const [userList, setUserList] = useState([])
  
  async function getUsers() {
    // 1. データのやり取り
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const userList = await res.json();
    setUserList(userList);
  }

  return (
    <div className="App">
      <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl">顧客一覧</h1>
      <button 
        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        onClick={getUsers}
      >
        more
      </button>

      <div className="flex">
        {userList.map((user)=>{
          return (
            <div className="flex-wrap text-gray-600 px-5 py-24">
              <User name={user.name} />
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;

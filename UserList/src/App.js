import React, { useState } from 'react';
import AddUser from './Components/User/AddUser';
import UserList from './Components/User/UserList';
import Wrapper from './Components/Helpers/Wrapper';

const INITIAL_USERS = [
  {name: 'Max', age: '28', id: Math.random().toString()},
  {name: 'Steve', age: '35', id: Math.random().toString()}
];

function App() {
  const [users, setUsers] = useState(INITIAL_USERS);

  const saveNewUser = (newUser) => {
    setUsers(previousUsers => {
      return [newUser, ...previousUsers]
    })
  }

  return (
    <>
      <AddUser onSaveNewUser={saveNewUser}/>
      <UserList allUsers={users}></UserList>
    </>
  );
}

export default App;

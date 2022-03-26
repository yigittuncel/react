import React from "react";
import UserIndividual from "./UserIndividual";
import './UserList.css'

const UserList = props => {
  return (
    <div className="user-list">
      <ul>
        {props.allUsers.map(user => (
          <UserIndividual
          key={user.id}
          name={user.name}
          age={user.age}
          />
          ))}
      </ul>
    </div>
  );
};

export default UserList;

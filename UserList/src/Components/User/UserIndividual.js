import React from "react";

const UserIndividual = props => {
  return (
    <li>
      <div className="user-individual">
        <p>{props.name} ({props.age} years old)</p>
      </div>
    </li>
  )
};

export default UserIndividual;

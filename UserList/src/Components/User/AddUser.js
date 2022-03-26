import React, { useState } from "react";
import './AddUser.css'

import Button from "../UI/Button";

const AddUser = (props) => {
  const [enteredName, setEnteredName] = useState('')
  const [enteredAge, setEnteredAge] = useState('')

  const nameChangeHandler = e => {
    setEnteredName(e.target.value)
  }

  const ageChangeHandler = e => {
    setEnteredAge(e.target.value)
  }

  const submitHandler = e => {
    e.preventDefault();

    const newUSer = {
      name: enteredName,
      age: enteredAge,
      id: Math.random().toString()
    }

    props.onSaveNewUser(newUSer)
    setEnteredName('')
    setEnteredAge('')
  }


  return (
    <div>
      <form className="input" onSubmit={submitHandler}>
        <label>Username</label>
        <input
          type="text"
          onChange={nameChangeHandler}
        />
        <label>Age (years)</label>
        <input
          type="number"
          onChange={ageChangeHandler}
          min='1'
          step='1'
        />
        <Button />
      </form>
    </div>
  );
};

export default AddUser;

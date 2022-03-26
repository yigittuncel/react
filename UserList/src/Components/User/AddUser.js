import React, { useState } from "react";
import styles from './AddUser.module.css'

import Card from '../UI/Card'
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

    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      return;
    }

    if ( +enteredAge < 1 ) {
      return;
    }

    const newUSer = {
      name: enteredName,
      age: enteredAge,
      id: Math.random().toString()
    }

    props.onSaveNewUser(newUSer);
    setEnteredName('')
    setEnteredAge('')
  }


  return (
    <Card className={styles.input}>
      <form onSubmit={submitHandler}>
        <label htmlFor="username">Username</label>
        <input
          value={enteredName}
          id="username"
          type="text"
          onChange={nameChangeHandler}
        />
        <label htmlFor="age">Age (years)</label>
        <input
          value={enteredAge}
          id="age"
          type="number"
          onChange={ageChangeHandler}
          min='1'
          step='1'
        />
        <Button type='submit'>Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;

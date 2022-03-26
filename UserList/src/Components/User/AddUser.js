import React, { useState } from "react";
import styles from './AddUser.module.css'

import Card from '../UI/Card'
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

const AddUser = (props) => {
  const [enteredName, setEnteredName] = useState('')
  const [enteredAge, setEnteredAge] = useState('')
  const [error, setError] = useState()

  const nameChangeHandler = e => {
    setEnteredName(e.target.value)
  }

  const ageChangeHandler = e => {
    setEnteredAge(e.target.value)
  }

  const submitHandler = e => {
    e.preventDefault();

    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values)'
      })
      return;
    }

    if (+enteredAge < 1 ) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (>0)'
      })
      return;
    }

    const newUser = {
      name: enteredName,
      age: enteredAge,
      id: Math.random().toString()
    }

    props.onSaveNewUser(newUser);
    setEnteredName('')
    setEnteredAge('')
  }

  const errorHandler = () => {
    setError(null)
  }

  return (
    <Wrapper>
      {error && <ErrorModal onConfirm={errorHandler} title={error.title} message={error.message} /> }
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
            />
          <Button type='submit'>Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;

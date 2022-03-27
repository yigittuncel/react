import React, { useState, useRef } from "react";
import styles from './AddUser.module.css'

import Card from '../UI/Card'
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from '../Helpers/Wrapper'

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState()


  const submitHandler = e => {
    e.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;

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
    nameInputRef.current.value = ''
    ageInputRef.current.value = ''
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
          <input id="username" type="text" ref={nameInputRef}/>
          <label htmlFor="age">Age (years)</label>
          <input id="age" type="number" ref={ageInputRef}/>
          <Button type='submit'>Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;

import {useState} from 'react'

const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isTouched, setIstouched] = useState(false);

  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && isTouched;

  const valueChangeHandler = event => {
    setEnteredValue(event.target.value);
  }

  const valueBlurHandler = event => {
    setIstouched(true);
  }

  const reset = () => {
    setEnteredValue('');
    setIstouched(false);
  }

  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    valueBlurHandler,
    reset
  }
};

export default useInput;

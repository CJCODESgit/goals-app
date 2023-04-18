import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../../UI/Button/Button';
// {using styled components instead} import './CourseInput.css';

const FormControl = styled.div`
  margin: 0.5rem 0;

& label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

& input {
  display: block;
  width: 100%;
  border: 1px solid ${props => (props.invalid ? 'red' : '#ccc')};
  font: inherit;
  line-height: 1.5rem;
  padding: 0 0.25rem;
}

& input:focus {
  outline: none;
  background: #fad0ec;
  border-color: #8b005d;
}

&.invalid input {
  border-color: red;
  background: #ffd7d7;
}

&.invalid label {
  color: red;
}
`;

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = event => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      {//USING STYLED COMPONENTS INSTEAD. HENCE, FORMCONTROL INSTEAD OF DIV

        <FormControl invalid={!isValid}>
          <label >Goals</label>
          <input type="text" onChange={goalInputChangeHandler} />
        </FormControl>

     /* <div className={`form-control ${!isValid ? 'invalid' : ''}`}>
        <label >Goals</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div> */}
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;

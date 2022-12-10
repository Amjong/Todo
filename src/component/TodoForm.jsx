import React, { useState } from 'react';
import { useEffect } from 'react';

function TodoForm(props) {
  const [todoText, setTodoText] = useState('Add Todo');
  const handleChange = (e) => {
    e.preventDefault();
    setTodoText(e.target.value);
  };
  const handleFirstClick = (e) => {
    if (e.target.value === 'Add Todo') {
      setTodoText('');
    }
  };
  return (
    <div>
      <input
        type='text'
        value={todoText}
        onClick={handleFirstClick}
        onChange={handleChange}
      ></input>
      <button
        onClick={() => {
          props.addItems(todoText);
          setTodoText('');
        }}
      >
        Add
      </button>
    </div>
  );
}

export default React.memo(TodoForm, (props) => props.addItems);

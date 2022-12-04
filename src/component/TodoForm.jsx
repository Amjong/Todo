import React, { useState } from 'react';

function TodoForm(props) {
  const [todoText, setTodoText] = useState('Add Todo');
  const handleChange = (e) => {
    e.preventDefault();
    setTodoText(e.target.value);
  };
  return (
    <div>
      <input type='text' value={todoText} onChange={handleChange}></input>
      <button
        onClick={() => {
          props.addItems(todoText);
        }}
      >
        Add
      </button>
    </div>
  );
}

export default React.memo(TodoForm, (props) => props.addItems);

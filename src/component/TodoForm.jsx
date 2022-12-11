import React, { useState } from 'react';
import { styles } from './TodoForm.module.css';

function TodoForm(props) {
  const [todoText, setTodoText] = useState('');
  const handleChange = (e) => {
    e.preventDefault();
    setTodoText(e.target.value);
  };
  return (
    <div>
      <input
        type='text'
        value={todoText}
        onChange={handleChange}
        placeholder='Add Todo'
        // style={styles.input}
      ></input>
      <button
        onClick={() => {
          props.addItems(todoText);
          setTodoText('');
        }}
        // style={styles.button}
      >
        Add
      </button>
    </div>
  );
}

export default React.memo(TodoForm, (props) => props.addItems);

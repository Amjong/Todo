import React from 'react';
import './App.css';
import TodoItems from './component/TodoItems.jsx';
import { useState } from 'react';

function App() {
  const [state, setState] = useState('All');
  const handleClick = (stateString) => {
    if (state !== stateString) {
      setState(stateString);
    }
  };
  return (
    <div className='App'>
      <header>
        <button
          className='filterButton'
          onClick={() => {
            handleClick('All');
          }}
        >
          All
        </button>
        <button
          className='filterButton'
          onClick={() => {
            handleClick('active');
          }}
        >
          active
        </button>
        <button
          className='filterButton'
          onClick={() => {
            handleClick('completed');
          }}
        >
          completed
        </button>
      </header>
      <TodoItems state={state}></TodoItems>
    </div>
  );
}

export default App;

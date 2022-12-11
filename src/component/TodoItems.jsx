import React, { useState, useReducer } from 'react';
import todoItemReducer from '../reducer/todoItemReducer';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import { useCallback } from 'react';
import styles from './TodoItems.module.css';

export default function TodoItems(props) {
  const [todoItems, dispatch] = useReducer(todoItemReducer, initialItem);
  const addItems = useCallback((text) => {
    dispatch({ type: 'add', text });
  }, []);
  const removeItems = useCallback((text) => {
    dispatch({ type: 'remove', text });
  }, []);
  const checkItems = useCallback((text, checked) => {
    dispatch({ type: 'check', text, checked });
  }, []);
  return (
    <div>
      {todoItems.arr.map((item) => {
        if (props.state === 'All' || item.state === props.state) {
          return (
            <li key={item.id} className={styles.li}>
              <TodoItem
                itemName={item.name}
                removeItems={removeItems}
                checkItems={checkItems}
                itemState={item.state}
              ></TodoItem>
            </li>
          );
        }
      })}
      <TodoForm addItems={addItems}></TodoForm>
    </div>
  );
}

const initialItem = {
  count: 0,
  arr: [],
};

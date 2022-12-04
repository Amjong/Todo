import React, { useState, useReducer } from 'react';
import todoItemReducer from '../reducer/todoItemReducer';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import { useCallback } from 'react';
import { useEffect } from 'react';

export default function TodoItems() {
  const [todoItems, dispatch] = useReducer(todoItemReducer, initialItem);
  const addItems = useCallback((text) => {
    dispatch({ type: 'add', text });
  }, []);
  const removeItems = useCallback((text) => {
    dispatch({ type: 'remove', text });
  }, []);
  return (
    <div>
      {todoItems.arr.map((item) => (
        <li key={item.id}>
          <TodoItem itemName={item.name} removeItems={removeItems}></TodoItem>
        </li>
      ))}
      <TodoForm addItems={addItems}></TodoForm>
    </div>
  );
}

const initialItem = {
  count: 0,
  arr: [],
};

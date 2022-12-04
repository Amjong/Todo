import React, { useState, useReducer } from 'react';
import todoItemReducer from '../reducer/todoItemReducer';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import { useCallback } from 'react';
import { useEffect } from 'react';

export default function TodoItems() {
  //   const [todoItems, dispatch] = useReducer(todoItemReducer, []);

  const [items, setItems] = useState({ count: 0, arr: [] });
  const addItems = useCallback((text) => {
    setItems((prev) => ({
      count: prev.count + 1,
      arr: [
        ...prev.arr,
        {
          id: prev.count + 1,
          name: text,
        },
      ],
    }));
    // dispatch({ type: 'add', newItem });
  }, []);
  //   useEffect(() => {
  //     console.log(items);
  //   }, [items]);
  const removeItems = useCallback((text) => {
    setItems((prev) => ({
      ...prev,
      arr: prev.arr.filter((item) => item.name !== text),
    }));
    console.log('remove!');
  }, []);
  return (
    <div>
      {items.arr.map((item) => (
        <li key={item.id}>
          <TodoItem itemName={item.name} removeItems={removeItems}></TodoItem>
        </li>
      ))}
      <TodoForm addItems={addItems}></TodoForm>
    </div>
  );
}

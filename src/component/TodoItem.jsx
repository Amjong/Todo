import React, { useState, useCallback } from 'react';
import { GoTrashcan } from '@react-icons/all-files/go/GoTrashcan';
import { useEffect } from 'react';
import { styles } from './TodoItem.module.css';

function TodoItem(props) {
  const [checked, setChecked] = useState(
    props.itemState === 'completed' ? true : false
  );

  const handleChange = () => {
    props.checkItems(props.itemName, checked);
  };
  useEffect(handleChange, [checked]);
  return (
    <div>
      <input
        type='checkbox'
        checked={checked}
        onChange={() => {
          setChecked((prev) => !prev);
        }}
      ></input>
      <span className='itemName'>{props.itemName}</span>
      <GoTrashcan
        onClick={() => {
          props.removeItems(props.itemName);
        }}
        className='trashcan'
      />
    </div>
  );
}

export default React.memo(TodoItem);

import React, { useState, useCallback } from 'react';
import { GoTrashcan } from '@react-icons/all-files/go/GoTrashcan';

function TodoItem(props) {
  const [checked, setChecked] = useState(false);
  const handleChange = () => {
    if (checked === true) {
      console.log('unchecked!!');
    } else {
      console.log('checked!!');
    }
  };
  return (
    <div>
      <input
        type='checkbox'
        onClick={() => {
          setChecked((prev) => !prev);
        }}
        checked={checked}
        onChange={handleChange}
      ></input>
      <span className='itemName'>{props.itemName}</span>
      <GoTrashcan
        onClick={() => {
          props.removeItems();
        }}
      />
    </div>
  );
}

export default React.memo(TodoItem);

/* eslint-disable */
import { useState } from 'react';

import styles from '@/styles/TodoItem.module.css';

const TodoItem = ({ itemProp, handleChange, delTodo, setUpdate }
  ) => {
  const [editing, setEditing] = useState(false);

  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };

  const handleEditing = () => {
    setEditing(true);
  };

  const viewMode = {};
  const editMode = {};
  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }

  const handleUpdatedDone = (event) => {
    if (event.key === 'Enter') {
      setEditing(false);
    }
  };

  return (
    <li className={styles.item}>
      <div className={styles.content} style={viewMode}>
          <input
        type="checkbox"
        checked={itemProp.completed}
        onChange={() => handleChange(itemProp.id)}
      />
          <span style={itemProp.completed ? completedStyle : null}>
              {itemProp.title}
            </span>
          <button type='button' onClick={handleEditing}>Edit</button>
          <button type='button' onClick={() => delTodo(itemProp.id)}>Delete</button>
        </div>
      <input
        type="text"
        value={itemProp.title}
        className={styles.textInput}
        onKeyDown={handleUpdatedDone}
        style={editMode}
        onChange={(e) => setUpdate(e.target.value, itemProp.id)}

      />
    </li>
  );
};

export default TodoItem;

import React from 'react'
import styles from "./todo.module.css"
import DeleteIcon from '@mui/icons-material/Delete';

const TodoList = () => {
  return (
    <div className={styles.todoList}>
        <div>
          <DeleteIcon/>
        </div>
    </div>
  )
}

export default TodoList
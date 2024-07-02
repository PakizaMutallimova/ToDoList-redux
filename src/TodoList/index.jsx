import React, { useRef } from 'react'
import styles from "./todo.module.css"
import DeleteIcon from '@mui/icons-material/Delete';
import ClearIcon from '@mui/icons-material/Clear';
import { useSelector } from 'react-redux';

const TodoList = () => {
   useRef()
  const toDoSelector = useSelector((state) => state.counter.toDoList)
  // console.log(toDoSelector);
  const toDoListItems = toDoSelector.map(listItem => {
    // console.log(listItem);
  })


  return (
    <div className={styles.todoList}>
      <div>
        <div className='todolist flex justify-center p-3 flex-col'>
          {toDoSelector.map(listItem => {`<div className="w-full flex justify-between">
            <p className='text-xl text-red-200'>${listItem}</p>
            <div>
              <ClearIcon className='text-red-200' />
              <DeleteIcon className='text-red-200' />
            </div>
          </div>`})}
          
          
        </div>
      </div>
    </div>
  )
}

export default TodoList
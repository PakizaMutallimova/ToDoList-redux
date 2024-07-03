import React, { useState } from 'react'
import styles from "./input.module.css"
import { useDispatch, useSelector } from 'react-redux'
import { setToDo } from '../features/toDoListDone/toDoListSlice'

const InputComponent = () => {
  const [data, setData] = useState('')

  const dispatch = useDispatch()

  function catchInputValue(e) {
      setData(e.target.value)
  }
  function addToDoList(e) {
    if(data.trim()){
      dispatch(setToDo(data))
      setData(e.target.value = "")
    }
  }
  return (
    <div className={styles.container}>
        <div className="inputPlace">
            <input onChange={catchInputValue} type="text" value={data}/>
            <button onClick={addToDoList} className={styles.btn} type='submit'>Send</button>
        </div>
    </div>
  )
}

export default InputComponent
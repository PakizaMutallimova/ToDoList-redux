import { useState } from 'react'
import Header from './Header'
import "./App.css";
import InputComponent from './InputComponent';
import TodoList from './TodoList';
import DoneList from './DoneList';

function App() {
  // const [count, setCount] = useState(0)
  return (
    <>
      <Header/>
      <InputComponent/>
      <div className="lists">
        <TodoList/>
        <DoneList/>
      </div>
    </>
  )
}

export default App
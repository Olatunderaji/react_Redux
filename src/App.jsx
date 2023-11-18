import { useState } from 'react'
import './App.css'
import AddTodo from './Components/AddTodo'
import TodoList from './Components/TodoList'


function App() {

  return (
    <>
    <div>
    <AddTodo/>
    </div>

    <div>
    <TodoList/>
    </div>
    </>
  )
}

export default App

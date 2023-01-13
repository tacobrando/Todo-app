import './App.css';
import AddTask from './components/AddTask'
import TaskList from './components/TaskList'

import { useState, useEffect } from 'react'

function App() {
  const initialState = JSON.parse(localStorage.getItem("todos")) || []

  const [input, setInput] = useState("")
  const [todos, setTodos] = useState(initialState);
  const [edit, setEdit] = useState(null)
  const [taskInput, setTaskInput] = useState("")

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <div className="card">
            <h1>Todo List</h1>
            <AddTask
              todos={todos}
              setTodos={setTodos}
              input={input}
              setInput={setInput}
            />
            <div className="list-card">
              <TaskList 
                todos={todos} 
                setTodos={setTodos} 
                edit={edit}
                setEdit={setEdit}
                setInput={setTaskInput}
                input={taskInput}
              />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;

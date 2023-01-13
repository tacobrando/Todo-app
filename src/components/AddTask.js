import React from 'react'
import './component.css'

function AddTask({ todos, input, setInput, setTodos }) {
  const inputChange = (event) => {
    setInput(event.target.value)
  }  

  const formSubmit = (event) => {
    event.preventDefault()
    setTodos([...todos, {
        id: todos.length + 1, 
        title: input, 
        completed: false}
    ])
    setInput("")
  }

  return (
    <div className='add-task'>
        <form className="task-input" onSubmit={formSubmit}>
            <input 
                required
                type="text" 
                name="title" 
                placeholder="Enter a task..." 
                value={input}
                onChange={inputChange}
                maxLength="30"
            />
            <button type="submit" className="add-btn">
                Submit
            </button>
        </form>
    </div>
  )
}

export default AddTask
import './component.css'

function TaskList({ todos, setTodos, setEdit, edit, input, setInput }) {
    function toggleHandle(index) {
        setEdit(index)
    }
    function updateHandle(data) {
        let title = input
        const newTodo = todos.map((todo) => {
           return todo.id === data.id ? {...todo, title} : todo
        })
        setTodos(newTodo)
        setEdit(null)
    }

    function handleComplete(todo) {
        setTodos(todos.map((item => {
            if(item.id === todo.id) {
                return {...item, completed: !item.completed}
            }
            return item
        })))

    }

    function handleDelete(id) {
        setTodos(todos.filter((todo) => todo.id !== id))
    }

    const inputChange = (event) => {
        setInput(event.target.value)
        
      }  

    function activeContent(todo) {
        return <div className="list">
        <form className="taskForm" onSubmit={() => updateHandle(todo)}>
            <input 
            className="title"
            type="text" 
            onChange={inputChange}
            />
            <span className="btns">
                <button type="submit">Save</button>
                <button onClick={() => toggleHandle(null)}>Cancel</button>
            </span>
        </form>
    </div>
    }

    function inactiveContent(todo, index) {
        return <div className="list">
        <span className="title">
            {todo.title}
        </span>
        <span className="btns">
            {todo.completed !== true ? <button className="complete-btn hover" onClick={() => handleComplete(todo)}>Complete</button>:
            <button className="undo-btn hover" onClick={() => handleComplete(todo)}>Undo</button>
            }
            <button className="delete-btn hover" onClick={() => handleDelete(todo.id)}>Delete</button>
            <button className="edit-btn hover" id={todo.id} onClick={() => toggleHandle(index)}>Edit</button>   
        </span>
    </div>
    }

    return (
        <div className="task-list">
            {todos.map((todo, index) => (
                <li className={`list ${todo.completed ? "complete": "todos"}`} key={index}>
                    {edit === index ? activeContent(todo, index) :inactiveContent(todo, index)}
                </li>
            ))}
        </div>
    )
}

export default TaskList
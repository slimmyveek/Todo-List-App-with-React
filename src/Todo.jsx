import { useRef, useState } from 'react'
import './App.css'
import TodoItems from './TodoItems'

const Todo = () => {

    // Create an array to store the list of tasks
    const [todoList, setTodoList] = useState([]);

    // Getting the text from the input box
    const inputRef = useRef();



    // Add new task to the Todo List
    const addTask = () => {

        // Store the trimmed characters typed in the input box as inputText
        const inputText = inputRef.current.value.trim();

        // Checking if the input box is empty
        if (inputText === "")
            return null;

        // Populate an array of new task with an id and task name
        const newTask = {
            id: Date.now(),
            taskName: inputText,
        }

        // Update the array when a new task is added
        setTodoList((prev) => [...prev, newTask]);

        // Clear the input box for a new task input
        inputRef.current.value = "";
    }

    // Delete task(s) using the id
    const deleteTask = (id) =>

        // Return all the tasks in the array except the task with this unique id
        setTodoList((prev) => {
            return prev.filter((task) => task.id !== id)
        })

    // Edit task(s) using the id
    const editTask = (id, newTaskName) => {
        setTodoList((prev)=>prev.map((task)=>(task.id===id? {...task, taskName:newTaskName}:task)));
    };

    return (
        <div className='todolist'>

            <div>
                <h1>Todo List App</h1>
            </div>

            {/* Input for task  */}
            <div className='task'>
                <input type="text" ref={inputRef} name="taskInput" id="taskInput" placeholder="Add a new task" />
                <button onClick={addTask} id="addTask">+</button>
            </div>

            {/* List of tasks  */}
            <div>
                {todoList.map((item) => {
                    return <TodoItems key={item.id} taskName={item.taskName} id={item.id} editTask={editTask} deleteTask={deleteTask} />
                })}

            </div>

        </div>
    )
}

export default Todo

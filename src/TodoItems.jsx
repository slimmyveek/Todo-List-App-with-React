import React, { useState } from 'react';
import edit from './assets/edit.svg'
import del from './assets/delete.svg'

const TodoItems = ({ taskName, id, editTask, deleteTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTaskName, setNewTaskName] = useState(taskName);

  const handleEdit = () => {
    editTask(id, newTaskName);
    setIsEditing(false);
  };
  
  return (
    <div>

      {/* List of tasks with edit and delete buttons */}

      <ul className='taskItems'>
        <li>
          <div>
          {isEditing ? (
        <input
          type="text"
          value={newTaskName}
          onChange={(e) => setNewTaskName(e.target.value)}
          onBlur={handleEdit}
        />
      ) : (
        <span>{taskName}</span>
      )}</div>
      
          <img onClick={() => setIsEditing(!isEditing)} src={edit} alt=""/>
          <img onClick={()=>{deleteTask(id)}} src={del} alt="" />
        </li>
      </ul>
    </div>
  )
}

export default TodoItems
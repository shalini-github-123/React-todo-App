import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, toggleTask } from '../../redux/actions';
import './TaskList.css';

const TaskList = () => {
  // Retrieve tasks from Redux store
  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch(); // Get dispatch function from Redux
  
  // Event handler for deleting a task
  const handleDeleteTask = (taskId) => {
    dispatch(deleteTask(taskId)); // Dispatch action to delete task
  };

  // Event handler for toggling task completion status
  const handleToggleTask = (taskId) => {
    dispatch(toggleTask(taskId)); // Dispatch action to toggle task completion status
  };

  return (
    <div className="task-list-container">
      <ul>
        {/* Iterate through tasks and render each task as a list item */}
        {tasks.map(task => (
          <li key={task.id} className={task.completed ? 'completed' : ''}>
            <span>{task.text}</span> {/* Display task text */}
            <div>
              {/* Button to toggle task completion status */}
              <button 
                className={`complete-button ${task.completed ? 'undo' : ''}`} // Add class based on task completion status
                onClick={() => handleToggleTask(task.id)} // Call handleToggleTask onClick
              >
                {task.completed ? 'Undo' : 'Complete'} {/* Show 'Undo' or 'Complete' based on completion status */}
              </button>
              {/* Button to delete task */}
              <button 
                className="delete-button" // Apply delete-button class for styling
                onClick={() => handleDeleteTask(task.id)} // Call handleDeleteTask onClick
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;

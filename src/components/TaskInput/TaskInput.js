import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../../redux/actions';

const TaskInput = () => {
  // State to store the text of the task input
  const [taskText, setTaskText] = useState('');
  
  // Redux dispatch function
  const dispatch = useDispatch();

  // Event handler to update taskText state when input changes
  const handleInputChange = (e) => {
    setTaskText(e.target.value);
  };

  // Event handler to add task to Redux store when 'Add Task' button is clicked
  const handleAddTask = () => {
    // Check if taskText is not empty
    if (taskText.trim() !== '') {
      // Dispatch 'addTask' action with the task text
      dispatch(addTask(taskText));
      // Clear taskText state
      setTaskText('');
    }
  };

  // Event handler to add task to Redux store when Enter key is pressed
  const handleKeyPress = (e) => {
    // Check if Enter key is pressed
    if (e.key === 'Enter') {
      // Call handleAddTask function to add task
      handleAddTask();
    }
  };

  return (
    <div className="task-input-container">
      {/* Input field for entering task text */}
      <input
        type="text"
        placeholder="Enter task"
        value={taskText}
        onChange={handleInputChange} // Call handleInputChange on input change
        onKeyPress={handleKeyPress} // Call handleKeyPress on key press
      />
      {/* Button to add task */}
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default TaskInput;

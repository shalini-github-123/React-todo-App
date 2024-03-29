import { ADD_TASK, DELETE_TASK, TOGGLE_TASK } from './actions';

// Initialize state with tasks fetched from local storage, or empty array if no tasks exist
const initialState = {
  tasks: JSON.parse(localStorage.getItem('tasks')) || [] // Initialize tasks array from local storage or empty array if no tasks exist
};

// Reducer function to handle state updates based on dispatched actions
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      // Extract new task from action payload
      const newTask = action.payload;
      // Create updated tasks array by adding new task to existing tasks
      const updatedTasks = [...state.tasks, newTask];
      // Store updated tasks array in local storage
      localStorage.setItem('tasks', JSON.stringify(updatedTasks)); 
      // Return updated state with new tasks array
      return {
        ...state,
        tasks: updatedTasks
      };
    case DELETE_TASK:
      // Extract task ID to be deleted from action payload
      const taskId = action.payload;
      // Filter out the task to be deleted from the tasks array
      const filteredTasks = state.tasks.filter(task => task.id !== taskId);
      // Store filtered tasks array in local storage
      localStorage.setItem('tasks', JSON.stringify(filteredTasks));
      return {
        ...state,
        tasks: filteredTasks
      };
    case TOGGLE_TASK:
      const toggledTaskId = action.payload;
      // Map through tasks array and toggle completion status of the specified task
      const toggledTasks = state.tasks.map(task =>
        task.id === toggledTaskId ? { ...task, completed: !task.completed } : task
      );
      // Store updated tasks array in local storage
      localStorage.setItem('tasks', JSON.stringify(toggledTasks)); 
      // Return updated state with toggled tasks array
      return {
        ...state,
        tasks: toggledTasks
      };
    default:
      return state;
  }
};

export default reducer;

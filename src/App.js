import React from 'react';
import { Provider } from 'react-redux'; 
import store from './redux/store'; 
import './App.css';
import TaskInput from './components/TaskInput/TaskInput';
import TaskList from './components/TaskList/TaskList';

function App() {
  return (
    <Provider store={store}> {}
      <div className="app-container">
        <h1>React To-Do Application</h1>
        <TaskInput />
        <TaskList />
      </div>
    </Provider>
  );
}

export default App;

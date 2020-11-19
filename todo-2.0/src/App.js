import React from 'react';
import NewTaskForm from './NewTaskForm';
import TaskList from './TaskList';
import './Todo.scss';


function App() {

    return (
        <div className='container'>
            <h1 className='title'>Todo List</h1>
            <NewTaskForm />
            <TaskList />
        </div>
    )
}

export default App;

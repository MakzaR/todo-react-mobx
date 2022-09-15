import React from 'react';
import TodoList from "./components/TodoList/TodoList";
import AddTodoItem from "./components/AddTodoItem/AddTodoItem";
import Filters from "./components/Filters/Filters";

import "./App.scss";

function App() {
    return (
        <div className='container'>
            <h1>Список заданий</h1>
            <AddTodoItem/>
            <Filters/>
            <TodoList/>
        </div>
    );
}

export default App;

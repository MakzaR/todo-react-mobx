import React from 'react';
import TodoList from "./components/TodoList/TodoList";
import AddTodoItem from "./components/AddTodoItem/AddTodoItem";
import Filters from "./components/Filters/Filters";

function App() {
    return (
        <>
            <AddTodoItem/>
            <Filters/>
            <TodoList/>
        </>
    );
}

export default App;

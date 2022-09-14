import React from 'react';
import {observer} from "mobx-react-lite";
import todoStore from "../store/todoStore";
import TodoItem from "./TodoItem";
import AddTodoItem from "./AddTodoItem";

const TodoList = observer(() => {
    return (
        <>
            <AddTodoItem/>
            <div>
                <button onClick={() => todoStore.changeFilter('all')}>Все</button>
                <button onClick={() => todoStore.changeFilter('completed')}>Выполненные</button>
                <button onClick={() => todoStore.changeFilter('open')}>Невыполненные</button>
                {todoStore.filteredTodoItems.map(todoItem => <TodoItem todo={todoItem} key={todoItem.id}/>)}
            </div>
        </>
    );
})

export default TodoList;

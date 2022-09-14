import React from 'react';
import {observer} from "mobx-react-lite";
import todoStore from "../../store/todoStore";
import TodoItem from "../TodoItem/TodoItem";

const TodoList = observer(() => {
    return (
        <div>
            {todoStore.filteredTodoItems.map(todoItem => <TodoItem todo={todoItem} key={todoItem.id}/>)}
        </div>
    );
})

export default TodoList;

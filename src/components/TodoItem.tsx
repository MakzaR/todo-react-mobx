import React from 'react';
import {observer} from "mobx-react-lite";
import todoStore from "../store/todoStore";

const TodoItem = observer(({todo}: ITodoItemProps) =>  {
    return (
        <div>
            <input type={"checkbox"} defaultChecked={todo.completed} onChange={() => todoStore.toggleCompleted(todo)}/>
            <span>{todo.task}</span>
            <button onClick={() => todoStore.removeTodo(todo)}>X</button>
        </div>
    );
})

export default TodoItem;

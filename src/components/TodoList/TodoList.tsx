import React from 'react';
import {observer} from "mobx-react-lite";
import todoStore from "../../store/todoStore";
import TodoItem from "../TodoItem/TodoItem";

import styles from './TodoList.module.scss';

const TodoList = observer(() => {
    const todos = todoStore.filteredTodoItems;

    return (
        <div className={styles.todoListContainer}>
            {todos.length > 0 ?
                todos.map(todoItem => <TodoItem todo={todoItem} key={todoItem.id}/>) :
                <span className={styles.plug}>Нет заданий</span>}
        </div>
    );
})

export default TodoList;

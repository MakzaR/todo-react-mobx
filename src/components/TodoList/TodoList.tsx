import React from 'react';
import {observer} from "mobx-react-lite";
import todoStore from "../../store/todoStore";
import TodoItem from "../TodoItem/TodoItem";

import styles from './TodoList.module.scss';

const TodoList = observer(() => {
    return (
        <div className={styles.todoListContainer}>
            {todoStore.filteredTodoItems.map(todoItem => <TodoItem todo={todoItem} key={todoItem.id}/>)}
        </div>
    );
})

export default TodoList;

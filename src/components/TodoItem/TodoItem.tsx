import React from 'react';
import {observer} from "mobx-react-lite";
import todoStore from "../../store/todoStore";

import styles from './TodoItem.module.scss';

const TodoItem = observer(({todo}: ITodoItemProps) => {
    return (
        <div className={styles.todoContainer}>
            <input className={styles.checkbox} type={"checkbox"} defaultChecked={todo.completed} onChange={() => todoStore.toggleCompleted(todo)}/>
            <span className={styles.taskText}>{todo.task}</span>
            <button className={styles.deleteButton} onClick={() => {
                todoStore.removeTodo(todo);
            }}>+
            </button>
        </div>
    );
})

export default TodoItem;

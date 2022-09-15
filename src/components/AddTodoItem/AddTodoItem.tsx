import React, {useState} from 'react';
import {observer} from "mobx-react-lite";
import todoStore from "../../store/todoStore";

import styles from './AddTodoItem.module.scss';

const AddTodoItem = observer(() => {
    const [todoTask, setTodoTask] = useState('');

    function handleAddTodo(task: string) {
        if (task) {
            todoStore.addTodo(task);
            setTodoTask('');
        }
    }

    function handleKeyPress(event: React.KeyboardEvent) {
        if (event.key === 'Enter') {
            handleAddTodo(todoTask)
        }
    }

    return (
        <div className={styles.formContainer}>
            <input className={styles.input}
                   type={'text'}
                   value={todoTask}
                   placeholder={'Введите название задания'}
                   onChange={(e) => setTodoTask(e.target.value)}
                   onKeyDown={handleKeyPress}
            />
            <button className={styles.addButton} onClick={() => handleAddTodo(todoTask)}>+</button>
        </div>
    );
})

export default AddTodoItem;

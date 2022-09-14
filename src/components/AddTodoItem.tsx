import React, {useState} from 'react';
import {observer} from "mobx-react-lite";
import todoStore from "../store/todoStore";

const AddTodoItem = observer(() => {
    const [todoTask, setTodoTask] = useState('');

    function handleAddTodo(task: string) {
        todoStore.addTodo(task);
        setTodoTask('');
    }

    function handleKeyPress(event: React.KeyboardEvent) {
        if (event.key === 'Enter') {
            handleAddTodo(todoTask)
        }
    }

    return (
        <div>
            <input type={"text"} value={todoTask} onChange={(e) => setTodoTask(e.target.value)} onKeyDown={handleKeyPress}/>
            <button onClick={() => handleAddTodo(todoTask)}>+ Добавить</button>
        </div>
    );
})

export default AddTodoItem;

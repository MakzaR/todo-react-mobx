import React, {useState} from 'react';
import {observer} from "mobx-react-lite";
import todoStore from "../store/todoStore";

const AddTodoItem = observer(() =>  {
    const [todoTask, setTodoTask] = useState('');

    function handleAddTodo(task: string) {
        todoStore.addTodo(task);
        setTodoTask('');
    }

    return (
        <div>
            <input type={"text"} value={todoTask} onChange={(e) => setTodoTask(e.target.value)}/>
            <button onClick={() => handleAddTodo(todoTask)}>AddTodo</button>
        </div>
    );
})

export default AddTodoItem;

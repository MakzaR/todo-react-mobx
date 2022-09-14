import React from 'react';
import {observer} from "mobx-react-lite";
import todoStore from "../store/todoStore";
import TodoItem from "./TodoItem";
import AddTodoItem from "./AddTodoItem";

const TodoList = observer(() => {

    // function getFilteredTodos(filter: string) {
    //     switch (filter) {
    //         case 'all':
    //             return todoStore.todoItemsList;
    //         case 'completed':
    //             return todoStore.completedTodoItems;
    //         case 'open':
    //             return todoStore.openTodoItems;
    //     }
    // }

    return (
        <>
            <AddTodoItem/>
            <div>
                {todoStore.todoItemsList.map(todoItem => <TodoItem todo={todoItem} key={todoItem.id}/>)}
                {/*<button onClick={() => todoStore.todoItemsList}>All</button>*/}
                {/*<button onClick={() => todoStore.completedTodoItems}>Completed</button>*/}
                {/*<button onClick={() => todoStore.openTodoItems}>Open</button>*/}
                {/*<select>*/}

                {/*</select>*/}
            </div>
        </>
    );
})

export default TodoList;

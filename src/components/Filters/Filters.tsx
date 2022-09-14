import React from 'react';
import {observer} from "mobx-react-lite";
import todoStore from "../../store/todoStore";

const Filters = observer(() => {
    return (
        <div>
            <button onClick={() => todoStore.changeFilter('all')}>Все</button>
            <button onClick={() => todoStore.changeFilter('completed')}>Выполненные</button>
            <button onClick={() => todoStore.changeFilter('open')}>Невыполненные</button>
        </div>
    );
})

export default Filters;

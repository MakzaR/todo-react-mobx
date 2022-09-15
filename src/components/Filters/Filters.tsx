import React from 'react';
import {observer} from "mobx-react-lite";
import todoStore from "../../store/todoStore";

import styles from './Filter.module.scss';

const Filters = observer(() => {
    const currentFilter = todoStore.filter;

    function getButtonStyles(filter: string) {
        return `${styles.filterButton}  ${currentFilter === filter ? styles.activeButton : ''}`;
    }

    return (
        <div className={styles.filtersContainer}>
            <button className={getButtonStyles('all')} onClick={() => todoStore.changeFilter('all')}>
                Все
            </button>
            <button className={getButtonStyles('completed')} onClick={() => todoStore.changeFilter('completed')}>
                Выполненные
            </button>
            <button className={getButtonStyles('open')} onClick={() => todoStore.changeFilter('open')}>
                Невыполненные
            </button>
        </div>
    );
})

export default Filters;

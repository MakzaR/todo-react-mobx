import {makeAutoObservable} from "mobx";

class TodoStore {
    todoItemsList: Array<ITodoItem> = [
        {
            id: 1,
            task: 'Подучить MobX',
            completed: true
        },
        {
            id: 2,
            task: 'Подучить TypeScript',
            completed: true
        },
        {
            id: 3,
            task: 'Выполнить тестовое задание с todo листом',
            completed: false
        },
        {
            id: 4,
            task: 'Ещё одно супер пупер длинное задание на несколько строк, чтобы проверить вёрстку (на всякий случай)',
            completed: false
        },
        {
            id: 5,
            task: 'Даже/если/прописать/всё/в/одну/строку/без/пробелов/вёрска/не/сломается',
            completed: false
        }
    ];

    filter: string = 'all';

    constructor() {
        makeAutoObservable(this);
    }

    get completedTodoItems(): Array<ITodoItem> {
        return this.todoItemsList.filter(todoItem => todoItem.completed);
    }

    get openTodoItems(): Array<ITodoItem> {
        return this.todoItemsList.filter(todoItem => !todoItem.completed)
    }

    get filteredTodoItems(): Array<ITodoItem> {
        switch (this.filter) {
            case 'all':
                return this.todoItemsList;
            case 'completed':
                return this.completedTodoItems;
            case 'open':
                return this.openTodoItems;
            default:
                throw new Error('Неизвестный фильтр');
        }
    }

    addTodo(task: string) {
        this.todoItemsList.push({
            id: Math.random(),
            task: task,
            completed: false
        });
    }

    removeTodo(todoItem: ITodoItem) {
        this.todoItemsList.splice(this.todoItemsList.indexOf(todoItem), 1);
    }

    toggleCompleted(todoItem: ITodoItem) {
        todoItem.completed = !todoItem.completed;
    }

    changeFilter(filter: string) {
        this.filter = filter;
    }
}

export default new TodoStore();
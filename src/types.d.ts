interface ITodoItem {
    id?: number,
    task: string,
    completed: boolean
}

interface ITodoItemProps {
    todo: ITodoItem
}
export default function tasks(tasks = [], action) {
    switch (action.type) {
        case 'ADD_TASK':
            return [...tasks,
            {
                id: action.id,
                title: action.title,
                completed: false
            }
            ]
        case 'REMOVE_TASK':
            return tasks.filter(task => {
                return task.id !== action.id
            })
        case 'UPDATE_TASK':
            return tasks.map(task => {
                if (task.id === action.id && action.newTitle !== "") {
                    task.title = action.newTitle
                }
                return task
            })
        case 'COMPLETE_TASK':
            return tasks.map(task => {
                if (task.id === action.id) {
                    task.completed = true
                }
                return task
            })
        default:
            return tasks
    }
}
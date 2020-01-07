let taskId = 0

export const addTask = title => ({
    type: 'ADD_TASK',
    id: taskId++,
    title
})

export const removeTask = id => ({
    type: 'REMOVE_TASK',
    id
})

export const updateTask = (id, newTitle) => ({
    type: 'UPDATE_TASK',
    newTitle,
    id
})

export const completeTask = (id) => ({
    type: 'COMPLETE_TASK',
    id
})
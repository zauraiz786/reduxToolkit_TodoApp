import { createSlice, nanoid } from "@reduxjs/toolkit"

export const todoSlice = createSlice({
    name: 'Todo',
    initialState: {
        todos: []
    },
    reducers: {
        addTodo: (state, action) => {
            state.todos.push({
                id: nanoid(),
                title: action.payload.title
            })
        },
        removeTodo: (state, action) => {
            state.todos.splice(action.payload.index , 1)
        },
        editTodo: (state, action) => {
            let edit = prompt("Edit Todo" , state.todos.title)
            state.todos[action.payload.index].title = edit
        },
    }
})


export const { addTodo, removeTodo, editTodo } = todoSlice.actions 

export default todoSlice.reducer
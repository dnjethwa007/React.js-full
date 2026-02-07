import {createSlice , nanoid} from '@reduxjs/toolkit'

const intialState = {
    todo:[
       { 
        id : 1,
        text : "Learn Redux Toolkit"
       }
    ]
}

export const todoSlice = createSlice({
    name : "todo",
    initialState : intialState,
    reducers : {
        addTodo : (state , action) => {
            const todo = {
                id : nanoid(),
                text : action.payload
            }
            state.todo.push(todo)
        },
        removeTodo : (state , action) => {
            state.todo = state.todo.filter(todo => todo.id !== action.payload)
        },
        updateTodo : (state , action) => {
            const todo = state.todo.find(todo => todo.id === action.payload)

            if(todo){

                const text = prompt("Enter new text for the todo", todo.text)
                if(text) {
                    todo.text = text
                }

            }

        }
    }
})

export const {addTodo , removeTodo , updateTodo} = todoSlice.actions

export default todoSlice.reducer


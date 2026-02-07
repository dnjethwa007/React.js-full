import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo , updateTodo , addTodo } from '../features/todo/todoSlice'

function Todo() {
    const todos = useSelector(state => state.todo)
    const dispatch = useDispatch()
    const [isTodoEditable , setTodoEditable] = useState(false)

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Todo List</h2>
      <ul className="space-y-2">
        {todos.map(todo => (
          <li key={todo.id} className="flex justify-between items-center bg-white p-3 rounded-lg shadow">
            <span>{todo.text}</span>
            <div className="space-x-2">
              <button 
                onClick={() => {
                    if (isTodoEditable) {
                        dispatch(updateTodo(todo.id))
                        
                    } else setTodoEditable(true);
                }}
                className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                

              >
                                {isTodoEditable ? "📁" : "✏️"}

              </button>
              <button 
                onClick={() => dispatch(removeTodo(todo.id))}
                className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Todo
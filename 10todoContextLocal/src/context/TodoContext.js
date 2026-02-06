import { createContext , useContext } from "react";


export const TodoContext = createContext({
    todo: [
        {id:1,
         todo: "Todo Msg",
         completed: false,
        }
    ],
    addTodo : (todo) => {},
    updatedTodo : (id,todo) => {},
    deleteTodo : (id) => {},
    toggleComplete : (id) => {}
});


export const useTodo = () => useContext(TodoContext);

export const TodoProvider = TodoContext.Provider;
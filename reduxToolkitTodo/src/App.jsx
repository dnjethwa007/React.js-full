import { useState } from 'react'
import AddTodo from './components/AddTodo'
import Todo from './components/Todo'
import { store } from './app/store'
import { Provider } from 'react-redux'
function App() {

  return (
   <Provider store={store}>
    <AddTodo />
    <Todo />
   </Provider>
  )
}

export default App

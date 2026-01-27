import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(0);
  
  function addValue(){
    if(count>=20)
      alert("You Count upto 20 numbers")
    else setCount(count + 1);
  }

  function removeValue(){
    if(count<=0){
      alert("You Count only positive number")
    }else
    setCount(count - 1);
  }

  return(
    <>
    
      <h1>Counter App</h1>
      <h2>Counter Value {count}</h2>

      <button
      onClick={addValue}
      >Add Counter</button><br />
      <button
      onClick={removeValue}
      >Remove Counter</button>
    </>
  )
}


export default App;

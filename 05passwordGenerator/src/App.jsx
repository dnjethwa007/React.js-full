import { useCallback, useEffect, useState , useRef} from 'react'

function App() {
 const [length, setLength] = useState(8);
const [numberAllowed, setNumberAllowed] = useState(false);
const [charAllowed, setCharAllowed] = useState(false);
const [password, setPassword] = useState("");


//useRef Hook
const passwordRef=useRef(null);

const copyPasswordToClipbord=useCallback(()=>{
  passwordRef.current?.select();
  passwordRef.current?.setSelectionRange(0,999);

  window.navigator.clipboard.writeText(password);
  alert("Password Copied to Clipbord");
},[password])

//useCallback Hook 


  const passwordGenerator =useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvxyz"
    if(numberAllowed) str+='0123456789'
    if(charAllowed) str+= "!@#$%^&*-[]{}~`"

    for(let i=1;i<=length;i++){
      let char = Math.floor(Math.random()*str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  },[numberAllowed,charAllowed,length,setPassword])

    useEffect(()=>{
      passwordGenerator();
    },[length,numberAllowed,charAllowed,passwordGenerator])
 
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-lg rounded-lg px-6 py-8 my-8 text-orange-400 bg-gray-900 border border-gray-700'>
      <h1 className='text-white text-center text-2xl font-bold mb-6'>Password Generator</h1>
        <div className='flex shadow-md rounded-lg overflow-hidden mb-6'>
          <input 
            type="text" 
            value={password}
            className='outline-none w-full py-2 px-4 bg-gray-800 text-white'
            placeholder='password'
            readOnly 
            ref={passwordRef}
          />
          <button className='outline-none bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 shrink-0 font-semibold transition'
          onClick={copyPasswordToClipbord}
          >Copy</button>

        </div>
        <div className='flex text-sm gap-x-4'>
          <div className='flex items-center gap-x-2'>
            <input
              type="range"
              min="8"
              max="100"
              value={length}
              className='accent-blue-600'
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label className='text-gray-300'>Length {length}</label>
          </div>
          <div className='flex items-center gap-x-2'>
            <input
              type="checkbox"
              id="numberAllowed"
              className='accent-blue-600'
              defaultChecked={numberAllowed}
              onChange={() => {
                setNumberAllowed(!numberAllowed);
              }}
            />
            <label className='text-gray-300'>Numbers</label>
          </div>
          <div className='flex items-center gap-x-2'>
            <input
              type="checkbox"
              id="charAllowed"
              className='accent-blue-600'
              defaultChecked={charAllowed}
              onChange={() => {
                setCharAllowed(!charAllowed);
              }}
            />
            <label className='text-gray-300'>Characters</label>
          </div>
        </div>
      </div>


    </>
  )
}

export default App

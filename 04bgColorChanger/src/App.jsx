import { useState } from 'react'
import './style.css'

function App() {
  const [bgColor, setBgColor] = useState('bg-olive-500')

  return (
    <div className={`${bgColor} min-h-screen flex flex-col items-center justify-center`}>
      
      <h1 className="text-3xl font-bold mb-6 text-white">
        Background Color Changer
      </h1>

      <div className="flex gap-4">
        <button
          className="bg-red-500 text-white px-4 py-2 rounded"
          onClick={() => setBgColor('bg-red-500')}
        >
          Red
        </button>

        <button
          className="bg-yellow-500 text-white px-4 py-2 rounded"
          onClick={() => setBgColor('bg-yellow-500')}
        >
          Yellow
        </button>

        <button
          className="bg-amber-700 text-white px-4 py-2 rounded"
          onClick={() => setBgColor('bg-amber-700')}
        >
          Brown
        </button>

        <button
          className="bg-green-500 text-white px-4 py-2 rounded"
          onClick={() => setBgColor('bg-green-500')}
        >
          Green
        </button>

        <button
          className="bg-purple-500 text-white px-4 py-2 rounded"
          onClick={() => setBgColor('bg-purple-500')}
        >
          Purple
        </button>
      </div>
    </div>
  )
}


export default App

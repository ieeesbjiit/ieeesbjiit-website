import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex flex-col justify-center items-center space-y-3'>
      <img src={logo} height={400} width={400} />
      <h2 className='text-2xl'>Vite + React</h2>
      <p className='text-lg text-white'>Count is: <strong className='text-secondary'>{count}</strong></p>
      <div className='flex items-center justify-center space-x-4'>
      <button className='btn btn-success' onClick={() => setCount(ctr => ctr+1)}>Count +</button>
      <button className='btn btn-error' onClick={() => setCount(ctr => ctr-1)}>Count -</button>
      <button className='btn btn-secondary' onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  )
}

export default App

import React from 'react'
import { useState } from 'react'

const App = () => {
  const [count,setCount]=useState(0)

  const ChangeTitle=()=>{
    setCount(prev=>{
      const newCount=prev+1;
      document.title=` Title Update ${newCount}`
      return newCount
    })
  }

  return (
    <div>
      <h1>DOM updates Example</h1>
      <p>Count: {count} </p>
      <button onClick={ChangeTitle}>ChangeTitle </button>
    </div>
  )
}

export default App

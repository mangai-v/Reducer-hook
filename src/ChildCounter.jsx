import  { useState } from 'react'

// eslint-disable-next-line react/prop-types
const ChildCounter = ({onIncrement}) => {
  const [count,setCount]= useState(0)
  const handleIncrement = ()=>{
    setCount(count+1)
    onIncrement()
  }
  return (
    <>
      <p>count-${count}</p>
      <button onClick={handleIncrement}>Increment</button>
    </>
  )
}

export default ChildCounter
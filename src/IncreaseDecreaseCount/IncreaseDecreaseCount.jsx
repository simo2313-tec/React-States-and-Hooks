import React, { useState } from 'react'

function IncreaseDecreaseCount() {
    const [counter, setCounter] = useState (0);

    const incremanetCounter = () => {
        setCounter(privCounter => privCounter + 1)
    }
    const decremanetCounter = () => {
        setCounter(privCounter => privCounter - 1)
    }
    const resetCounter = () => {
        setCounter(0)
    }
  return (
    <>
     <div>
        <div>
            <h2>Counter: {counter}</h2>
            <button onClick={incremanetCounter}>Incremanet</button>
            <button onClick={decremanetCounter}>Decremanet</button>
            <button onClick={resetCounter}>Reset</button>
        </div>
        </div> 
    </>
  )
}

export default IncreaseDecreaseCount

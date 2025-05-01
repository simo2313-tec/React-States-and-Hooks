import React, { useState } from 'react'
import './CounterStyles.css'

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
     <div className="counter-wrapper">
            <div className="counter-display">
                <h2>Counter: <span className="counter-value">{counter}</span></h2>
            </div>
            <div className="button-group">
                <button className="counter-btn btn-increment" onClick={incremanetCounter}>Increment</button>
                <button className="counter-btn btn-decrement" onClick={decremanetCounter}>Decrement</button>
                <button className="counter-btn btn-reset" onClick={resetCounter}>Reset</button>
            </div>
        </div> 
    </>
  )
}

export default IncreaseDecreaseCount

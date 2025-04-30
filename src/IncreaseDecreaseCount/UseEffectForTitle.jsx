import React, { useEffect, useState } from 'react'

function UseEffectForTitle() {
     const [counter, setCounter] = useState (0);
    
        const incremanetCounter = () => {
            setCounter(privCounter => privCounter + 1)
        }

        useEffect(()=>{
            alert("Component Is Mouted")
        },[])

        useEffect(()=>{
            document.title = `Counter: ${counter}`
        },[counter])
        
  return (
    <>
      <div>
        <div>
            <h2>Document Title Update</h2>
            <button onClick={incremanetCounter}>Click Here</button>
            <div>Counter: {counter}</div>
        </div>
      </div>
    </>
  )
}

export default UseEffectForTitle

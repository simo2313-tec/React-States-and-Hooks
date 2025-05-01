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
       <div className="counter-wrapper">
            <div className="title-updater">
                <h2>Document Title Update</h2>
                <div className="button-group">
                    <button className="counter-btn btn-primary" onClick={incremanetCounter}>Click Here</button>
                </div>
                <div className="counter-text">Counter: <span className="counter-value">{counter}</span></div>
            </div>
        </div>
    </>
  )
}

export default UseEffectForTitle

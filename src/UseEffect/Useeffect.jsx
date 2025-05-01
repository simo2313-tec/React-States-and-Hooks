import React, { useEffect, useState } from 'react'
import './UseEffectStyles.css' // Import the CSS file

function UseEffect() {
    const [counter, updateCounter] = useState(0);
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        console.log(counter);
    }, [])
    
    // Add animation when counter changes
    const handleClick = () => {
        updateCounter(counter + 1);
        setAnimate(true);
        setTimeout(() => setAnimate(false), 300); // Animation duration
    };

    return (
        <div className="useeffect-container">
            <h2 className={`counter-heading ${animate ? 'counter-animate' : ''}`}>
                you Click <span className="counter-value">{counter}</span> 
                <span className="counter-times">times</span>
            </h2>
            <button className="click-button" onClick={handleClick}>Click Here</button>
        </div>
    )
}

export default UseEffect
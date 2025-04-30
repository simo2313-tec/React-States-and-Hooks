// import React, { useEffect, useState } from 'react'

// function UseEffect() {
//     const [counter, updateCounter ] = useState (0);

//     useEffect (() => {
//         console.log(counter);
//     },[])
//   return (
//     <>
//     <h2>you Click {counter} {""}</h2>
//       <button onClick={() => updateCounter(counter + 1)}>click Here</button>
//     </>
//   )
// }

// export default UseEffect



// import React, { useEffect, useState } from 'react'

// function UseEffect() {
//      const [counter, setCounter] = useState (0);
    
//         const incremanetCounter = () => {
//             setCounter(privCounter => privCounter + 1)
//         }

//         useEffect(()=>{
//             alert("Component Is Mouted")
//         },[])
// // 
      
//   return (
//     <>
//       <div>
//         <div>
//             <h2>Document Title Update</h2>
//             <button onClick={incremanetCounter}>Click Here</button>
//             <div>Counter: {counter}</div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default UseEffect


import { useEffect, useState } from "react";

const UseEffect = () => {
  const [data, setData] = useState([]);
  const [showPedro, setShowPedro] = useState(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setData(json));
  },
  []
);

  useEffect(() => {
    console.log("Pedro");
  }, [showPedro]);

  return (
    <div>
      <button onClick={() => setShowPedro((prev) => !prev)}> Toggle </button>
      <h1> Posts</h1>
      <ul>
        {data.map((item) => (

          <li key={item.id}>{item.title} </li>
        ))}
      </ul>
    </div>
  );
};
export default UseEffect


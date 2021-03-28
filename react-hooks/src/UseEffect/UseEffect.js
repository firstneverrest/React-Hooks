 /* useEffect use to manage lifecycle method like class-based component
    This component will be re-rendered which make this useEffect works
  */

import React, { useState, useEffect } from "react";

function useEffectComponent() {
  const [count, setCount] = useState(0);
  const [threeCount, setThreeCount] = useState(0);

 
  /*   First way - componentDidUpdate() in this way you can write code
     anywhere in this function to behave like this, so we don't typically
     use useEffect in this way. */
  //   useEffect(() => {
  //     document.title = `You clicked ${count} times`;
  //   });

  // Second way - componentDidMount() which do only once
  //   useEffect(() => {
  //     document.title = `You clicked ${count} times`;
  //   }, []);

  // Third way - componentDidUpdate() which works when dependencies was changed
  //   useEffect(() => {
  //     document.title = `threeCount: ${threeCount}`;
  //     console.log("threeCount was rendered");
  //   }, [threeCount]);

  // Fourth way - componentDidUnMount() which works when component was unmounted
  //   useEffect(() => {
  //     const timeout = setTimeout(() => {
  //       alert("timeout!");
  //     }, 2000);
  //     return () => clearTimeout(timeout); // when component was unmounted, it will delete latest time
  //   }, [count]);

  const countHandler = () => {
    setCount(count + 1);
    if (count % 3 === 0) setThreeCount(threeCount + 1);
  };

  return (
    <div className="useEffectComponent">
      <h3>UseEffect</h3>
      <p>{count}</p>
      <button onClick={countHandler}>Click me</button>
    </div>
  );
}

export default useEffectComponent;
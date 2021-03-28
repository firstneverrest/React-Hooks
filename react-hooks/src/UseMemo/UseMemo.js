// useMemo is similar with pure component and React.memo()
// but use for value

import React, { useState, useMemo } from "react";

function useMemoComponent() {
  const [count, setCount] = useState(0);

  const getMessage = () => {
    console.log("getMessage was rendered");
    return "This is getMessage component";
  };

  // This is normal way to get value from function which cause getMessage
  // to render every time when some state was changed
  // const memoizedValue = getMessage();

  // useMemo make getMessage not re-render every time 
  // but will be re-rendered when dependency was changed
  // const memoizedValue = useMemo(getMessage, []);

  return (
    <div className="useMemoComponent">
      <h3>UseMemo</h3>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>click me</button>
    </div>
  );

}

export default useMemoComponent;

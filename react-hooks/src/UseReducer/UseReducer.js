// useReducer is similar with useState but can implement more complex
// such as we can put type to calculate state differently
import React, { useReducer } from "react";

// how to create reducer
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
}

function Counter() {
 // const [value, type] = useReducer(reducerName, initialState)
  const [count, dispatch] = useReducer(reducer, 0);
  return (
    <React.Fragment>
      <div>count: {count}</div>
      <button onClick={() => dispatch({ type: "increment" })}>increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>decrement</button>
    </React.Fragment>
  );
}

export default Counter;

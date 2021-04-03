# React Hooks
![image](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)

React Hooks are a new addition in React 16.8. They let you use React features without writing a class, but use functional component instead. There are many useful Hooks that React developer should know. However, some Hooks are somewhat not easy to understand with their concept. Therefore, I created this repository to keep some examples of How each React Hooks works.

## Basic Hooks
These Hooks are frequently use in every React project.
1. useState - manage state to memorize value
   <pre>
   import React, { useState } from "react";
   const [count, setCount] = useState(0);

   // in class component
    this.state = {
       count: 0
   }
   </pre>
   
2. useEffect - manage lifecycle method like class-based component.
3. useContext - creating global props make you easier to manage props across component. This means you don't need to pass props in many component to reach target component. useContext has the same concept as Redux

## Additional Hooks 
These Hooks are less frequently use but still play an important role in React
4. useReducer - similar with useState but can implement more complex. useReducer is similar with Redux reducer.
5. useMemo - make function not re-render every time if the value of the function is the same, but will be re-rendered when dependency was changed. useMemo is similar with pure component and React.memo()
6. useCallback - similar with useMemo but use for function
7. useRef - use with 2 reasons
   1. access DOM - use .current to refer to that html tag
   2. contain value - keep value inside and we can access by using .current
8. useImperativeHandle - use with useRef to access child component HTML element.
9.  useLayoutEffect - have the same signature with useEffect,
    before we will do before browser paints the DOM
    really happened when state is changed
10. useDebugValue - can be used to display a label for custom hooks in React DevTools.

## Custom Hook
Custom Hook allows you to build your own hook which can use single React Hook or combine many React Hooks to create custom hook. The custom hook is a JavaScript function whose name starts with "use" like the other React Hooks.
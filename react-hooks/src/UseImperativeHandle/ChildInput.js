import React, { useRef, useImperativeHandle, forwardRef } from "react";

function ChildInput(props, ref) {
  const inputRef = useRef(null);
  useImperativeHandle(ref, () => inputRef.current);

  return <input type="text" name="child input" ref={inputRef} />;
}

export default forwardRef(ChildInput);

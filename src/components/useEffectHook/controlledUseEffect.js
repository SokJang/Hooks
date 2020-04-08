import React, { useState, useEffect, useRef } from 'react'

// controlled useEffect
/*
Mutable reference useRef() holds mutable data that,
when changed, doesn’t trigger re-rendering.

The value of countRenderRef mutable reference increments countRenderRef.current++ every time the component renders.
What’s important, changing the reference doesn’t trigger component re-rendering.
 */
function CountMyRenders() {
  const countRenderRef = useRef(1);

  useEffect(function afterRender() {
    countRenderRef.current++;
  });

  return (
    <div>I've rendered {countRenderRef.current} times</div>
  );
}

export function ControlledUseEffect(){
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <CountMyRenders />
      <button onClick={() => setCount(count => count + 1)}>
        Click to re-render
      </button>
    </div>
  );
}
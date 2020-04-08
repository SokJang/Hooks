import React, { useState, useEffect } from 'react'

// uncontrolled useEffect
/*
useEffect() calls afterRender() callback after every render.

But as soon as countRender state updates, the component re-renders.
This triggers another state update, and another re-render, and so on indefinitely.
 */

export function UncontrolledUseEffect(){
  const [countRender, setCountRender] = useState(0);

  useEffect(function afterRender() {
    setCountRender(countRender => countRender + 1);
  });

  return (
    <div>I've rendered {countRender} times</div>
  );
}
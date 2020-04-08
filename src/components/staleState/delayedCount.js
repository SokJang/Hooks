import React, { useState } from 'react'

// Stale state
export function DelayedCount(){
  const [isAsyncCount, setCount] = useState(0);

  const handleClickAsync = () => {
    setTimeout(function delay () {
      // within delay (closure within setTimeout)
      // setCount stores the clicked count amount
      // that shows after setTimeout
      setCount(isAsyncCount => isAsyncCount + 1)
    }, 3000)
  }
  return(
    <div>
      {isAsyncCount}
      <br/>
      <button onClick={handleClickAsync}>Increase async</button>
    </div>
  )
}
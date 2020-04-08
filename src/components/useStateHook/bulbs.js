import React, { useState } from 'react'
import { toggleHook } from './toggleHook'

// simple useState
export function Bulbs() {
  const [isOn, setOn] = toggleHook(false)
  const [isCount, setCount] = useState(1);

  const lightSwitch = () => setOn(isOn => !isOn);
  const addBulbs = () => setCount(isCount => isCount + 1);

  const bulb = <div className={isOn ? 'bulb-on' : 'bulb-off'} />;
  const bulbs = Array(isCount).fill(bulb);

  return(
    <>
      <div className="bulbs">{bulbs}</div>
      <button onClick={lightSwitch}>On / Off</button>
      <button onClick={addBulbs}>Add bulb</button>
    </>
  );

}
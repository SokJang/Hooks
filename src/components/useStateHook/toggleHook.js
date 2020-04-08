import { useState } from 'react'

// Custom Hook
export function toggleHook(initial) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isToggled, setToggle] = useState(initial);
  return [isToggled, () => setToggle(!isToggled)];
}
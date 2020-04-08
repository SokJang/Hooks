// Lazy initialization of state
/*
Every time React re-renders the component, useState(initialState) is executed.

If the initial state is a primitive value (number, boolean, etc)
there are no performance issues.*/

/*
When the initial state requires expensive performance-wise operation,

use the lazy initialization of state
by supplying a function as an argument to useState(computeInitialState).
*/

import { useState } from 'react'

function MyComponent({bigJSONData}){
  const [isValue, setValue] = useState(
    function getInitialState(){
      // expensive operation
      const object = JSON.parse(bigJSONData);
      return object.initialValue
    }
  )
  // ...
}
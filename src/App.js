import React from 'react'
import { Bulbs } from './components/useStateHook/bulbs';
import { DelayedCount } from './components/staleState/delayedCount';
import { FavoriteMovies } from './components/useReducerHook/favoriteMovies';
import { FavoriteMoviesBetterUseReducer } from './components/useReducerHook/favoriteMoviesBetterUseReducer';
import { ControlledUseEffect } from './components/useEffectHook/controlledUseEffect';
import { UncontrolledUseEffect } from './components/useEffectHook/uncontrolledUseEffect';
import './styles.css';

// Render Container
function App() {
  return (
    <div className="App">
      <h2>Simple useState</h2>
      <Bulbs />
      <br/>
      <hr />
      <h2>Async states</h2>
      <DelayedCount />
      <hr />
      <h2>Complex states with useState</h2>
      <FavoriteMovies />
      <hr />
      <h2>Complex states with useReducer</h2>
      <FavoriteMoviesBetterUseReducer />
      <hr />
      <h2>Uncontrolled indefinitely renderings with useEffect (will probably crash your site)</h2>
      remove component from App.js to test behaviour of other components
      <UncontrolledUseEffect />
      <h2>Controlled renderings with useEffect and useRef (for addressed mutable data)</h2>
      <ControlledUseEffect />
      <h2>Lazy initialization of state</h2>
      <code>
        <p>{`function MyComponent({bigJSONData}){`}</p>
        <p style={{paddingLeft: '10px'}}>{`const [isValue, setValue] = useState(`}</p>
        <p style={{paddingLeft: '40px'}}>{`function getInitialState(){`}</p>
        <p style={{paddingLeft: '50px'}}>{`// expensive operation stored in inital state`}</p>
        <p style={{paddingLeft: '50px'}}>{`const object = JSON.parse(bigJSONData);`}</p>
        <p style={{paddingLeft: '50px'}}>{`return object.initialValue`}</p>
        <p style={{paddingLeft: '40px'}}>{`}`}</p>
        <p style={{paddingLeft: '10px'}}>{`)`}</p>
        <p style={{paddingLeft: '10px'}}>{`// ...`}</p>
        <p>{`}`}</p>
      </code>
    </div>
  );
}

export default App;

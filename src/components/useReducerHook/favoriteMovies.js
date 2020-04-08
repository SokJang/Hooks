import React, { useState } from 'react'
import { Movie } from './movies'
// Complex state management
/*
useState() is intended to manage simple state.

For complex state management, it's reasonable to stick to use reducerHook().
It provides better support for state that requires multiple state operations.

Let's say you need a program a list of favorite movies. The user can add a movie,
or delete an existing one.

A possible implementation of favorite movies list:
 */

export function FavoriteMovies(){
  const [movies, setMovies] = useState([{name: 'Heat'}]);
  const [newMovie, setNewMovie] = useState('');

  const add = movie => setMovies([...movies, movie]);
  const remove = index => {setMovies([...movies.slice(0, index), ...movies.slice(index + 1)])};

  const handleAddClick = () => {
    if(newMovie === ''){
      return;
    }
    add({ name: newMovie});
    setNewMovie('');
  };

  return (
    <>
      <div className='movies'>
        {movies.map((movie, index) => {
          return <Movie movie={movie} onRemove={() => remove(index)} />;
        })}
      </div>
      <div className='add-movie'>
        <input
          type="text"
          value={newMovie}
          onChange={(e) => setNewMovie(e.target.value)}
        />
        <button onClick={handleAddClick}>Add movie</button>
      </div>
    </>
  );

}
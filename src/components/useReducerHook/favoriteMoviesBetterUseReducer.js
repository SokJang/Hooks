import React, { useReducer, useState } from 'react';
import { Movie } from './movies';
import { reducer } from './reducer'

// Complex state management
/*
The state list requires several operations:
adding and removing movies.
The useState management details clutter the component (favoriteMovies).

A better solution is to extract the complex state management into a reducer:

 */

export function FavoriteMoviesBetterUseReducer(){
  const [movies, dispatch] = useReducer(reducer,[{name: 'Heat'}]);
  const [newMovie, setNewMovie] = useState('');

  const handleAddClick = () => {
    if(newMovie === ''){
      return;
    }
    dispatch({type: 'add', item: { name: newMovie}});
    setNewMovie('');
  };

  return (
    <>
      <div className='movies'>
        {movies.map((movie, index) => {
          return <Movie
            movie={movie}
            onRemove={
              () => dispatch({type: 'remove', index})
            }
          />;
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
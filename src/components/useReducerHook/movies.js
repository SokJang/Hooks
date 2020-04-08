import React from 'react'

export function Movie({movie, onRemove}){
  return (
    <div className='movie'>
        <span>
          {movie.name}
        </span>
      <button onClick={onRemove}>
        Remove
      </button>
    </div>
  );
}
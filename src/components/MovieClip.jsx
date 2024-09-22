import React from 'react'

function MovieClip( {genre, setSelectedGenres} ) {
    const onRemoveSelection = (genre) => {
        setSelectedGenres((selectedGenres) =>
          selectedGenres.filter((item) => item !== genre)
        );
      };
    return (
        <button>
            {genre.name} <span onClick={() => onRemoveSelection(genre)}>X</span>
        </button>
    )
}

export default MovieClip
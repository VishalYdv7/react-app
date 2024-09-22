import React from 'react'

const MovieBox = ({genre,selectedGenres,setSelectedGenres,}) => {
    const handleSelection = (genre) => () => {
        if(selectedGenres.includes(genre)){
            setSelectedGenres(selectedGenres.filter((item) => item !== genre))
        } else {
            setSelectedGenres([...selectedGenres, genre])
        }
    }
    return (
        <div
            style={{
            width: "150px",
            height: "150px",
            backgroundColor: "lightgreen",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "10px",
            boarder: `2px solid ${
                selectedGenres.includes(genre) ? "red" : "black"}`,
            }}
            onClick={handleSelection(genre)}
        >
            <h1>{genre.name}</h1>
        </div>
    )
}

export default MovieBox
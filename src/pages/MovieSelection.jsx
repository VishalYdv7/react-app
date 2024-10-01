// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import MovieBox from '../components/MovieBox'
import MovieClip from '../components/MovieClip'

//Array of Genres
const Genres = [
	{
		id: 0,
		name: "Action",
	},
	{
		id: 1,
		name: "Drama",
	},
	{
		id: 2,
		name: "Romance",
	},
	{
		id: 3,
		name: "Thriller",
	},
	{
		id: 4,
		name: "Horror",
	},
	{
		id: 5,
		name: "Western",
	},
	{
		id: 6,
		name: "Fantasy",
	},
	{
		id: 7,
		name: "Fiction",
	},
	{
		id: 8,
		name: "Music",
	},
];

const Selection = () => {
	const navigate=useNavigate();
	const [selectedGenres, setSelectedGenres]=useState([]);
	// Storing Generes in Local Storage and Routing to dashboard
	const moveNext = () => {
		if (selectedGenres.length < 3) {
			alert("Please select atleast 3 genres");
			return;
		}else{
			localStorage.setItem("selectedGeneres", JSON.stringify(selectedGenres));
			setSelectedGenres([]);
			navigate("/dashboard")
		}
	};
	return (
		<div>
		{/* grid for movie selection */}
		<div
		style={
			{
			display: 'grid',
			gridTemplateColumns: "repeat(3,1fr)",
			}
		}>
			{
			Genres.map((genre)=>(
				<div key={genre.id}>
				{/* movie box here */}
				<MovieBox
					genre={genre}
					selectedGenres={selectedGenres}
					setSelectedGenres={setSelectedGenres}
				/>
				</div>
			))
			}
		</div>
		{
			selectedGenres.length<3 &&(
			<p
			style={
				{
				color: 'red',
				fontWeight: 'bold',
				height:'20px'
				}
			}
			>
			Please select at least 3 Genres
			</p>
			)
		}

		{/* grid for movie clips */}
		<div>
			{
			selectedGenres.map((genre)=>(
				<p
					key={genre.id}
				>
					{/* Movie clip here} */}
					<MovieClip
						genre={genre}
						setSelectedGenres={setSelectedGenres}
					/>
				</p>
			))
			}
		</div>
		<button onClick={moveNext}>Next Page</button>
		</div>
	);
}

export default Selection
import React, { useState, useEffect } from 'react';
import axios from './axios';
import './Row.css';
export default function Row({ title, fetchURL, isLargeRow = false }) {
	const [movies, setMovies] = useState([]);
	const base_url = 'https://image.tmdb.org/t/p/original';
	useEffect(() => {
		async function fetchData() {
			const request = await axios.get(fetchURL);
			setMovies(request.data.results);
			return request;
		}
		fetchData();
	}, [fetchURL]);
	console.log(movies);
	return (
		<div className="row">
			<h1 className="nm-collections-row-name">{title}</h1>
			<div className="nm-content-horizontal-row">
				<div className="row__posters">
					{movies.map(
						(movie) =>
							((isLargeRow && movie.poster_path) ||
								(!isLargeRow && movie.backdrop_path)) && (
								<img
									className={`row__poster ${isLargeRow && 'row__posterLarge'}`}
									key={movie.id}
									src={`${base_url}${
										isLargeRow ? movie.poster_path : movie.backdrop_path
									}`}
									alt={movie.original_name}
								/>
							)
					)}
				</div>
				<div className="nm-content-horizontal-row-nav right">
					<button>
						<span className="nf-svg-icon ">
							<svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
								<path
									fill="currentColor"
									d="M11.56 5.56L10.5 4.5 6 9l4.5 4.5 1.06-1.06L8.12 9z"
								></path>
							</svg>
						</span>
					</button>
					<div className="nm-content-horizontal-row-gradient"></div>
				</div>
			</div>
		</div>
	);
}

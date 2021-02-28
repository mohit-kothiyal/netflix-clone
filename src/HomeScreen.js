import React from 'react';
import './HomeScreen.css';
import Nav from './Nav';
import Banner from './Banner';
import Row from './Row';
import requests from './Request';
function Homescreen() {
	return (
		<div className="homeScreen">
			<Nav />
			<Banner />

			<div className="collections">
				<Row
					title="Netflix Originals"
					fetchURL={requests.fetchNetflixOriginals}
					isLargeRow
				/>
				<Row title="Trending Now" fetchURL={requests.fetchTrending} />
				<Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies} />
				<Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies} />
				<Row title="Romance Movies" fetchURL={requests.fetchRomanceMovies} />
				<Row title="Documentaries" fetchURL={requests.fetchDocumentaries} />
			</div>
		</div>
	);
}

export default Homescreen;

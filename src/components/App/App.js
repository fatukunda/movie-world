import React, { useEffect, useReducer } from 'react';
import Header from '../Header/Header';
import Movie from '../Movie/Movie';
import Search from '../Search/Search';
import { initialState, reducer } from '../../store/reducer';
import axios from 'axios';
import './app.scss';

const MOVIE_API_URL = 'http://www.omdbapi.com/?s=man&apikey=fbae037f';

const App = () => {
	const [ state, dispatch ] = useReducer(reducer, initialState);

	useEffect(() => {
		axios.get(MOVIE_API_URL).then((jsonResponse) => {
			dispatch({
				type: 'SEARCH_MOVIES_SUCCESS',
				payload: jsonResponse.data.Search,
			});
		});
	}, []);

	const search = (searchValue) => {
		dispatch({
			type: 'SEARCH_MOVIES_REQUEST',
		});

		axios(`https://www.omdbapi.com/?s=${searchValue}&apikey=fbae037f`).then((jsonResponse) => {
			if (jsonResponse.data.Response === 'True') {
				dispatch({
					type: 'SEARCH_MOVIES_SUCCESS',
					payload: jsonResponse.data.Search,
				});
			} else {
				dispatch({
					type: 'SEARCH_MOVIES_FAILURE',
					payload: jsonResponse.data.Error,
				});
			}
		});
	};

	const { movies, errorMessage, loading } = state;

	const retrievedMovies =
		loading && !errorMessage ? (
			<div className="spinner-border text-primary" role="status">
				<span className="sr-only">Loading...</span>
			</div>
		) : errorMessage ? (
			<div className="alert alert-danger" role="alert">
				{errorMessage}
			</div>
		) : (
			movies.map((movie, index) => (
				<div className="col-md-3">
					<Movie key={`${index}-${movie.Title}`} movie={movie} />
				</div>
			))
		);

	return (
		<div>
			<Header appTitle="MovieWorld" />
			<div>
				<Search search={search} />
			</div>
			<div className="movies">
				<h5 className="mb-4"> Recommended for you </h5>
				<div className="row main-content">{retrievedMovies}</div>
			</div>
		</div>
	);
};

export default App;

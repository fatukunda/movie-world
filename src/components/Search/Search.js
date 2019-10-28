import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './search.scss';

const Search = ({ search }) => {
	const [ searchValue, setSearchValue ] = useState('');

	const searchInputHandler = (e) => {
		setSearchValue(e.target.value);
	};
	const resetInputField = () => {
		setSearchValue('');
	};
	const searchMovie = (e) => {
		e.preventDefault();
		search(searchValue);
		resetInputField();
	};

	return (
		<form className="search">
			<input
				type="text"
				value={searchValue}
				onChange={searchInputHandler}
				placeholder="Enter movie name to search"
			/>
			<input type="submit" value="SEARCH" onClick={searchMovie} className="ml-2" />
		</form>
	);
};
Search.propTypes = {
	search: PropTypes.func,
};

export default Search;

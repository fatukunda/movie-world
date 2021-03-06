import React from 'react'
import PropTypes from 'prop-types'
import './movie.scss'

const DEFAULT_IMAGE = 'http://www.theprintworks.com/wp-content/themes/psBella/assets/img/film-poster-placeholder.png'

const Movie = ({ movie }) => {
    const poster = movie.Poster === 'N/A' ? DEFAULT_IMAGE: movie.Poster;
    return (
        <div className="movie">
            <h5>{movie.Title}</h5>
            <div>
                <img src={poster} alt={`The movie: ${movie.Title}`}/>
            </div>
            <p>({movie.Year})</p>
        </div>
    )
}

Movie.propTypes ={
    movie: PropTypes.instanceOf(Object)
}

export default Movie

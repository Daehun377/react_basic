// import React from 'react';
//
// const MoviePoster = ({poster}) => {
//     return (
//        <img src={poster} />
//     );
// };
//
// export default MoviePoster;

import React from 'react';
import PropTypes from 'prop-types';
import "./Movie.css";

const MoviePoster = ({poster}) => {
    return (
       <img src={poster} alt="moviePoster" className={"Movie_Poster"} />
    );
};

MoviePoster.propTypes = {
    poster : PropTypes.string.isRequired
};

export default MoviePoster;
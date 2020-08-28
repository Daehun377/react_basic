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

const MoviePoster = ({poster}) => {
    return (
       <img src={poster} alt="moviePoster" />
    );
};

MoviePoster.propTypes = {
    poster : PropTypes.string.isRequired
};

export default MoviePoster;
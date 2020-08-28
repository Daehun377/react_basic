// import React from 'react';
// import "../App.css";
// import Poster from "./MoviePoster";
//
// const Movie = ({title, poster}) => {
//     return (
//         <div>
//             <h1 className={"brother"}>{title}</h1>
//             <Poster poster={poster} />
//         </div>
//
//     );
// };
//
// export default Movie;

import React from 'react';
import PropTypes from 'prop-types';
import Poster from "./MoviePoster";
import "../App.css";

const Movie = ({title, poster}) => {
    return (
        <div>
            <h1 className={"brother"}>{title}</h1>
            <Poster poster={poster} />
        </div>
    );
};

Movie.propTypes = {
    title : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired
};

export default Movie;
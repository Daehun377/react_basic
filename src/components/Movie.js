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
import LinesEllipsis from "react-lines-ellipsis";

import "./Movie.css";


const Movie = ({title, poster, description}) => {
    return (
        <div className="Movie">
            <div className={"Movie_column"}>
                <Poster poster={poster} />
            </div>
            <div className={"Movie_column"}>
                <h1>{title}</h1>
                <div>
                    <LinesEllipsis

                        text={description}
                        maxLine={"3"}
                        ellipsis={"..."}
                        trimLight
                        basedOn={"letters"}
                    />
                </div>
            </div>

        </div>
    );
};

Movie.propTypes = {
    title : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired,
    description : PropTypes.string.isRequired
};

export default Movie;
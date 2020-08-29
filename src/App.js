import React, {Component} from 'react';
import "./App.css";
import Movie from "./components/Movie";


class App extends Component {

    // 상태 선언
    state = {} //초기값은 비어있다.
    // 함수 선언
    renderMovie = () => {
        const movies = this.state.movies.map(movie => {
            return (
                <Movie poster={movie.poster} title={movie.title} />
            )
        })
        return movies
    }
    // 라이프사이클 함수 선언  -> 일련의 탄생부터 죽음까지의 생명주기
    // Render: componentWillMount() -> render() -> componentDidMount()
    // Update componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidUpdate()

    componentDidMount() { //마운트 되고 나서 실행되는 함수 무조건 -  데이터 불러올 때나 토큰 체크를 할때
        setTimeout(() => {
            this.setState({
                movies : [
                    {
                        title: "Trainspotting",
                        poster: "https://resizing.flixster.com/OUEArjor-MbyCV6GqLU85Hk9jQI=/300x300/v1.bjs1NTQ3OTM7ajsxNzQ2NjsxMjAwOzIwMDA7MTMzMQ"
                    },
                    {
                        title: "Matrix",
                        poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UY1200_CR84,0,630,1200_AL_.jpg"
                    },
                    {
                        title: "Full Metal Jacket",
                        poster: "https://upload.wikimedia.org/wikipedia/en/9/99/Full_Metal_Jacket_poster.jpg"
                    },
                    {
                        title: "Old boy",
                        poster: "https://upload.wikimedia.org/wikipedia/en/b/bb/Oldboy_2013_film_poster.jpg"
                    },
                    {
                        title: "Star Wars",
                        poster: "https://i.pinimg.com/736x/a1/61/c7/a161c7034917936f8bd53ca65bc6f0d0--star-wars-stuff-art-illustrations.jpg"
                    }

                ]
            })
        }, 5000) //5초 후에 위의 데이터를 넣겠다.
    }



    render() {
        //위의 것들을 다시 재선언
        const {movies, greeting} = this.state
        return (
            <div className={"App"}>
                {movies ? this.renderMovie() : "Loading"}
            </div>
        );
    }
}

export default App;
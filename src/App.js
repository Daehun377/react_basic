import React, {Component} from 'react';
import "./App.css";
import Movie from "./components/Movie";


class App extends Component {
    state = {}

    componentDidMount(){
        this._getMovies();
    }

    _renderMovies = () => {
        const movies = this.state.movies.map(movie => {
            return <Movie
                title={movie.title}
                poster={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
                key={movie.id}

            />
        })
        return movies
    }

    _getMovies =  async () => {
        const movies = await this._callApi()
        this.setState({
            movies
        })
    }

    _callApi = () => {
        return fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=8597e491ed6e80f0de12e349eb60ea6e&language=en-US&page=1')
            .then(potato => potato.json())
            .then(json => json.postInfo)
            .catch(err => console.log(err))
    }
    // // 상태 선언
    // state = {
    //     movies: []
    // } //초기값은 항상은 아니지만 여기선 비어있는 상태.
    // // 함수 선언
    //
    // componentDidMount() { //마운트 되고 나서 실행되는 함수 무조건 -  데이터 불러올 때나 토큰 체크를 할때
    //     this.getMovies()
    // }
    //
    //
    // renderMovie = () => {
    //     const movies = this.state.movies.map(movie => {
    //         return (
    //             <Movie poster={movie.small_cover_image} title={movie.title} />
    //         )
    //     })
    //     return movies
    // }
    //
    // getMovies = async () => {
    //     const movies = await this.callAPI()
    //     this.setState({
    //         movies
    //     })
    // }
    // // 라이프사이클 함수 선언  -> 일련의 탄생부터 죽음까지의 생명주기
    // // Render: componentWillMount() -> render() -> componentDidMount()
    // // Update componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidUpdate()
    //
    //
    //
    // callAPI = () => {
    //    return fetch("http://newsapi.org/v2/everything?q=bitcoin&from=2020-07-29&sortBy=publishedAt&apiKey=f1c87e2bb86248de9f9492e513f93e1f")
    //         .then(data => data.json())
    //         .then(json => json.articles)
    //         .then(movies => console.log(movies))
    //         .catch(err => console.log(err))
    // }
    //
    render() {
        //위의 것들을 다시 재선언
        const {movies} = this.state
        return (
            <div className={"App"}>
                {movies ? this._renderMovies() : "Loading"}
            </div>
        );
    }
}

export default App;
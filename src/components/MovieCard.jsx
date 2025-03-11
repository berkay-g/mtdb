import { useMovieContext } from "../contexts/MovieContext";
import "../css/MovieCard.css"

function MovieCard({ movie = { url: "https://placehold.co/50", title: "Placeholder Title", releaseDate: "01/01/1970"}}) {
    
    const {isFavorite, addToFavorites, removeFromFavorites} = useMovieContext();
    const favorite = isFavorite(movie.id);

    function onFavButtonClick(e) {
        e.preventDefault();
        if (favorite) removeFromFavorites(movie.id);
        else addToFavorites(movie)
        console.log(movie);
    }

    return (
        <>
            <div className="movie-card">
                <div className="movie-poster">
                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                    <div className="movie-overlay">
                        <button className={`favorite-btn ${favorite ? "active": ""}`} onClick={onFavButtonClick}>♡</button>
                    </div>
                </div>

                <div className="movie-info">
                    <h3>{movie.title || movie.name}</h3>
                    <p>{movie.release_date || `First Aired: ${movie.first_air_date}`} <br />{`TMDb Score: ${Math.floor(movie.vote_average*10)}%`}</p>
                </div>
            </div>
        </>
    )
}

export default MovieCard
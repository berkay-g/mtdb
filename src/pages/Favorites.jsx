import MovieCard from "../components/MovieCard"
import { useMovieContext } from "../contexts/MovieContext"
import "../css/Favorites.css"

function Favorites() {
    const { favorites } = useMovieContext();

    if (favorites.length !== 0) {
        return (
            <>
                <span className="favorites">
                    <h2>Your Favorites</h2>
                    <div className="movies-grid">
                        {favorites.map(movie =>
                            <MovieCard movie={movie} key={movie.id}></MovieCard>
                        )}
                    </div>
                </span>
            </>
        )
    }

    return (
        <div className="favorites-empty">
            <h2>No Favorites Yet</h2>
            <p>Try adding movies or tv shows to your favorites</p>
        </div>
    )
}

export default Favorites
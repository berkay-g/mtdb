import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import { searchMovies, getPopularMovies } from "../services/api";
import "../css/Home.css"

function Home() {
    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies();
                setMovies(popularMovies);
            } catch (error) {
                setError("Failed to load movies..");
                console.log(error);
            }
            finally {
                setLoading(false);
            }
        }

        loadPopularMovies();
    }, [])

    const handleSearch = async (e) => {
        e.preventDefault();
        if (!searchQuery.trim()) return;
        if (loading) return;
        setLoading(true);

        try {
            const searchResults = await searchMovies(searchQuery);
            setMovies(searchResults);
            setError(null);
        } catch (error) {
            setError("Failed to search movies..");
            console.log(error);
        } finally {
            setLoading(false);
            console.log(movies);
        }
    }

    return (
        <>
            <div className="home">
                <form onSubmit={handleSearch} className="search-form">
                    <input
                        type="text"
                        placeholder="Search for movies.."
                        className="search-input"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />

                    <button type="submit" className="search-button">Search</button>
                </form>

                {error && <div className="error-message">{error}</div>}

                {
                    loading ?
                        <div className="loading"></div> :
                        <div className="movies-grid">
                            {movies.map(movie =>
                                <MovieCard movie={movie} key={movie.id}></MovieCard>
                            )}
                        </div>
                }


            </div>
        </>
    );
}

export default Home
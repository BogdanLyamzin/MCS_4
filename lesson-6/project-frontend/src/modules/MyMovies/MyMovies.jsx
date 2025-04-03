import { useState, useEffect } from "react";

import MyMoviesAddForm from "./MyMoviesAddForm/MyMoviesAddForm";
import MovieList from "./MoviesList/MovieList";

import * as moviesRequest from "../../api/movies";

import styles from "./my-movies.module.css";


const MyMovies = ()=> {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(()=> {
        const fetchMovies = async()=> {
            try {
                setLoading(true);
                const data = await moviesRequest.getAllMovies();
                setMovies(data);
            }
            catch(error) {
                setError(error.message);
            }
            finally {
                setLoading(false);
            }
        }

        fetchMovies();
    }, []);

    const addMovie = async(data)=> {
        console.log(data);
    }

    const deleteMovie = async(id)=> {
        try {
            setLoading(true);
            await moviesRequest.deleteMovieById(id);
            setMovies(prevState => prevState.filter(item => item.id !== id));
        }
        catch(error) {
            setError(error.message);
        }
        finally {
            setLoading(false);
        }
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.block}>
                <MyMoviesAddForm formSubmit={addMovie} />
            </div>
            <div className={styles.block}>
                <MovieList items={movies} onDelete={deleteMovie} />
            </div>
        </div>
    )

}

export default MyMovies;
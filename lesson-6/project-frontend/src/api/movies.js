import axios from "axios";

const {VITE_APP_API_URL} = import.meta.env;

const moviesInstance = axios.create({
    baseURL: `${VITE_APP_API_URL}/movies`
});

export const getAllMovies = async ()=> {
    const {data} = await moviesInstance.get("/");
    return data;
} 

export const deleteMovieById = async id => {
    const {data} = await moviesInstance.delete(`/${id}`);
    return data;
}
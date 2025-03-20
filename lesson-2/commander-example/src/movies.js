import fs from "node:fs/promises";
import path from "node:path";
import { nanoid } from "nanoid";

// const moviesPath = path.join(process.cwd(), "src", "db", "movies.json");
const moviesPath = path.resolve("src", "db", "movies.json");

const updateMovies = movies => fs.writeFile(moviesPath, JSON.stringify(movies, null, 2));

export const getMovies = async()=> {
    const data = await fs.readFile(moviesPath, "utf-8");
    return JSON.parse(data);
}

export const getMovieById = async id => {
    const movies = await getMovies();
    const result = movies.find(item => item.id === id);
    return result || null;
}

export const addMovie = async data => {
    const movies = await getMovies();
    const newMovie = {
        id: nanoid(),
        ...data,
    };
    movies.push(newMovie);

    await updateMovies(movies);

    return newMovie;
}

export const updateMovieById = async(id, data)=> {
    const movies = await getMovies();
    const index = movies.findIndex(item => item.id === id);
    if(index === -1) return null;

    movies[index] = {...movies[index], ...data};

    await updateMovies(movies);

    return movies[index];
}

export const deleteMovieByid = async id => {
    const movies = await getMovies();
    const index = movies.findIndex(item => item.id === id);
    if(index === -1) return null;
    
    const [result] = movies.splice(index, 1);

    await updateMovies(movies);

    return result;
}
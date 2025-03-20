import yargs from "yargs";

import { getMovies, getMovieById, addMovie, updateMovieById, deleteMovieByid } from "./movies.js";

const invokeAction = async({action, id, ...data})=> {
    switch(action) {
        case "getAll":
            const allMovies = await getMovies();
            return console.log(allMovies);
        case "getById":
            const oneMovie = await getMovieById(id);
            return console.log(oneMovie);
        case "add":
            const newMovie = await addMovie(data);
            return console.log(newMovie);
        case "updateById":
            const updateMovie = await updateMovieById(id, data);
            return console.log(updateMovie);
        case "deleteById":
            const deleteMovie = await deleteMovieByid(id);
            return console.log(deleteMovie);
        default: 
            console.log("Unknown action");
    }
}

const {argv} = yargs(process.argv);
const {_, $0, ...actionData } = argv;
invokeAction(actionData);
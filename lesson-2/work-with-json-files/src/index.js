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

// invokeAction({action: "getAll"});
// invokeAction({action: "getById", id: "u9kgwNWGi3uUUwh0b8V48"});
// invokeAction({action: "add", title: "Avatar 2", director: "James Cameron"});
// invokeAction({action: "updateById", id: "fZPWDYP9WfgIDypdj_acj", title: "Avatar 3"});
// invokeAction({action: "deleteById", id: "fZPWDYP9WfgIDypdj_acj"});
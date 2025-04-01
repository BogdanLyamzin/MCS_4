import * as moviesService from "../services/moviesServices.js";

import HttpError from "../helpers/HttpError.js";

import ctrlWrapper from "../decorators/ctrlWrapper.js";

const getMoviesController = async (req, res) => {
  const data = await moviesService.getMovies();
  res.json(data);
};

const getMovieByIdController = async (req, res) => {
  const { id } = req.params;
  const data = await moviesService.getMovieById(id);

  if (!data) {
    throw HttpError(404, `Movie with id=${id} not found`);
    // const error = new Error(`Movie with id=${id} not found`);
    // error.status = 404;
    // throw error;
    // return res.status(404).json({
    //     message: `Movie with id=${id} not found`
    // })
  }

  res.json(data);
};

const addMovieController = async(req, res)=> {
    const data = await moviesService.addMovie(req.body);

    res.status(201).json(data);
}

const updateMovieByIdController = async(req, res)=> {
    const {id} = req.params;
    const data = await moviesService.updateMovieById(id, req.body);

    if (!data) {
        throw HttpError(404, `Movie with id=${id} not found`);
    }

    res.json(data);
}

const deleteMovieByIdController = async(req, res)=> {
    const {id} = req.params;
    const data = await moviesService.deleteMovieByid(id);

    if (!data) {
        throw HttpError(404, `Movie with id=${id} not found`);
    }
    // res.status(204).send();

    res.json({
        message: "Delete successfully"
    })
}

export default {
  getMoviesController: ctrlWrapper(getMoviesController),
  getMovieByIdController: ctrlWrapper(getMovieByIdController),
  addMovieController: ctrlWrapper(addMovieController),
  updateMovieByIdController: ctrlWrapper(updateMovieByIdController),
  deleteMovieByIdController: ctrlWrapper(deleteMovieByIdController),
};

import fs from "node:fs/promises";
import path from "node:path";

import * as moviesService from "../services/moviesServices.js";

import HttpError from "../helpers/HttpError.js";

import ctrlWrapper from "../decorators/ctrlWrapper.js";

const postersDir = path.resolve("public", "posters");

const getMoviesController = async (req, res) => {
  const { id: owner } = req.user;
  const data = await moviesService.getMovies({owner});
  res.json(data);
};

const getMovieByIdController = async (req, res) => {
  const { id } = req.params;
  const { id: owner } = req.user;
  const data = await moviesService.getMovie({id, owner});

  if (!data) {
    throw HttpError(404, `Movie with id=${id} not found`);
  }

  res.json(data);
};

const addMovieController = async (req, res) => {
  let poster = null;
  if(req.file) {
    const {path: oldPath, filename} = req.file;
    const newPath = path.join(postersDir, filename);
    await fs.rename(oldPath, newPath);
    poster = path.join("posters", filename);
  }
  const { id: owner } = req.user;
  const data = await moviesService.addMovie({ ...req.body, poster, owner });

  res.status(201).json(data);
};

const updateMovieByIdController = async (req, res) => {
  const { id } = req.params;
  const { id: owner } = req.user;
  const data = await moviesService.updateMovie({id, owner}, req.body);

  if (!data) {
    throw HttpError(404, `Movie with id=${id} not found`);
  }

  res.json(data);
};

const deleteMovieByIdController = async (req, res) => {
  const { id } = req.params;
  const { id: owner } = req.user;
  const data = await moviesService.deleteMovie({id, owner});

  if (!data) {
    throw HttpError(404, `Movie with id=${id} not found`);
  }
  // res.status(204).send();

  res.json({
    message: "Delete successfully",
  });
};

export default {
  getMoviesController: ctrlWrapper(getMoviesController),
  getMovieByIdController: ctrlWrapper(getMovieByIdController),
  addMovieController: ctrlWrapper(addMovieController),
  updateMovieByIdController: ctrlWrapper(updateMovieByIdController),
  deleteMovieByIdController: ctrlWrapper(deleteMovieByIdController),
};

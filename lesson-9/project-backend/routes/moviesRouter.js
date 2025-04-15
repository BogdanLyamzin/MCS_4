import express from "express";

import authenticate from "../middlewares/authenticate.js";

import moviesControllers from "../controllers/moviesControllers.js";

import validateBody from "../decorators/validateBody.js";

import { movieAddSchema, movieUpdateSchema } from "../schemas/moviesSchemas.js";

import isEmptyBody from "../middlewares/isEmptyBody.js";

const moviesRouter = express.Router();

moviesRouter.use(authenticate);

moviesRouter.get("/", moviesControllers.getMoviesController);

moviesRouter.get("/:id", moviesControllers.getMovieByIdController);

moviesRouter.post("/", isEmptyBody, validateBody(movieAddSchema), moviesControllers.addMovieController);

moviesRouter.put("/:id", isEmptyBody, validateBody(movieUpdateSchema), moviesControllers.updateMovieByIdController)

moviesRouter.delete("/:id", moviesControllers.deleteMovieByIdController);

export default moviesRouter;
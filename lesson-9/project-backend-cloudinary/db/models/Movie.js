import { DataTypes } from "sequelize";

import Sequelize from "../Sequelize.js";

import { genreList, releaseYearRegexp } from "../../constants/movies.js";

const Movie = Sequelize.define(
    "movie",
    {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "У фільма має бути назва"
                }
            }
        },
        director: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        favorite: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        genre: {
            type: DataTypes.ENUM(...genreList),
            defaultValue: "film",
            allowNull: false,
        },
        releaseYear: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                is: releaseYearRegexp,
            }
        },
        poster: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        owner: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    }
);

// Movie.sync({alter: true});

export default Movie;
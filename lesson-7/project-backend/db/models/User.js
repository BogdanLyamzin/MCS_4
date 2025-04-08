import { DataTypes } from "sequelize";

import Sequelize from "../Sequelize.js";

import { emailRegexp } from "../../constants/auth.js";

const User = Sequelize.define(
    "user",
    {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                is: emailRegexp,
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }
)

// User.sync();

export default User;
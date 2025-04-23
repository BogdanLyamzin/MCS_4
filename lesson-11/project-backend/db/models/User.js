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
        verify: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        verificationCode: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        token: {
            type: DataTypes.STRING,
        }
    }
)

// User.sync({alter: true});

export default User;
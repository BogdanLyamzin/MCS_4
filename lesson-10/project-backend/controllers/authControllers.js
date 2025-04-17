import * as authServices from "../services/authServices.js";

import ctrlWrapper from "../decorators/ctrlWrapper.js";

const signupController = async(req, res)=> {
    const newUser = await authServices.signupUser(req.body);

    res.status(201).json({
        username: newUser.username,
        email: newUser.email,
    });
}

const signinController = async(req, res)=> {
    const {token} = await authServices.signinUser(req.body);

    res.json({
        token,
    });
}

const getCurrentController = (req, res)=> {
    const {email, username} = req.user;

    res.json({
        email,
        username,
    })
}

const logoutController = async(req, res)=> {
    const {id} = req.user;
    await authServices.logoutUser(id);

    res.json({
        message: "Logout successfully"
    })
}

export default {
    signupController: ctrlWrapper(signupController),
    signinController: ctrlWrapper(signinController),
    getCurrentController: ctrlWrapper(getCurrentController),
    logoutController: ctrlWrapper(logoutController),
}
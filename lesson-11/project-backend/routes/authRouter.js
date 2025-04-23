import express from "express";

import authenticate from "../middlewares/authenticate.js";

import authControllers from "../controllers/authControllers.js";

import validateBody from "../decorators/validateBody.js";

import { authSignupSchema, authVerifySchema, authSigninSchema } from "../schemas/authSchemas.js"

const authRouter = express.Router();

authRouter.post("/signup", validateBody(authSignupSchema), authControllers.signupController);

authRouter.get("/verify/:verificationCode", authControllers.verifyController);

authRouter.post("/verify", validateBody(authVerifySchema), authControllers.resendVerifyEmailController);

authRouter.post("/signin", validateBody(authSigninSchema), authControllers.signinController);

authRouter.get("/current", authenticate, authControllers.getCurrentController);

authRouter.post("/logout", authenticate, authControllers.logoutController);

export default authRouter;
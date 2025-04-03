import HttpError from "../helpers/HttpError.js";

const validateBody = movieAddSchema => {
    const func = (req, res, next)=> {
        const {error} = movieAddSchema.validate(req.body, {
            abortEarly: false,
        });
        if(error) {
            return next(HttpError(400, error.message));
        }
        next();
    }

    return func;
}

export default validateBody;
import { ValidationError } from "sequelize";

const ctrlWrapper = ctrl => {
    const func = async(req, res, next)=> {
        try {
            await ctrl(req, res, next);
        }
        catch(error) {
            if(error instanceof ValidationError) {
                error.status = 400;
            }
            next(error);
        }
    }

    return func;
}

export default ctrlWrapper;
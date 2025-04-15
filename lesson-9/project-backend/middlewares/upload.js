import multer from "multer";
import path from "node:path";

import HttpError from "../helpers/HttpError.js";

const tempDir = path.resolve("temp");

const storage = multer.diskStorage({
    // destination: (req, file, callback) => {
    //     callback(null, tempDir);
    // },
    destination: tempDir,
    filename: (req, file, callback)=> {
        const uniquePrefix = `${Date.now()}_${Math.round(Math.random() * 1E9)}`;
        const filename = `${uniquePrefix}_${file.originalname}`;
        callback(null, filename);
    }
});

const limits = {
    fileSize: 1024 * 1024 * 5,
};

const fileFilter = (req, file, callback) => {
    const extenstion = file.originalname.split(".").pop();
    if(extenstion === "exe") {
        return callback(HttpError(400, ".exe not allow extension"));
    }
    callback(null, true);
}

const upload = multer({
    storage,
    limits,
    fileFilter,
});

export default upload;
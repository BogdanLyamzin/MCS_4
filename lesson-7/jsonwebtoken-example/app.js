import jwt from "jsonwebtoken";
import "dotenv/config";

const {JWT_SECRET} = process.env;

const payload = {
    email: "bogdan@gmail.com",
};

const token = jwt.sign(payload, JWT_SECRET, {
    expiresIn: "24h"
});
// console.log(token);
const decodeToken = jwt.decode(token);
// console.log(decodeToken);

try {
    const {email} = jwt.verify(token, JWT_SECRET);
    console.log(email);
    // const invalidToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJvZ2RhbkBnbWFpbC5jb20iLCJpYXQiOjE3NDQxMzQxMzYsImV4cCI6MTc0NDIyMDUzNn0.RFwqMopJEbDUkjsNhuAkj4o2E9_hMmWFgh4tr_OUgCu";
    // jwt.verify(invalidToken, JWT_SECRET);
}
catch(error) {
    console.log(error.message);
}
import app from "./app.js";

const {PORT = 3000} = process.env;
const port = Number(PORT);

const server = app.listen(port, () => {
    console.log(`Server is running. Use our API on port: ${port}`);
  });
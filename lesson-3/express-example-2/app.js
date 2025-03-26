import express from "express";

import movies from "./movies.js";

const app = express();

// app.set("json spaces", 8);

app.get("/movies", (req, res)=> {
    const dababaseResponse = null;
    // res.json(dababaseResponse);
    // res.send(dababaseResponse);
    res.json(movies);
    // res.send(movies);
})

app.listen(3000, ()=> console.log("Server running on 3000 port"));
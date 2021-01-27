const express = require("express");
const ExpressError = require("./expressError");
const loginUser = require("./loginUser");

//  API to connect Node and PostgresQL

const app = express();

app.use(express.json());

app.use("/loginUser", loginUser);


app.use( (req, res, next) => {
    const err = new ExpressError("Not Found", 404);

    return next(err);
})

app.listen(3001, () => {
    console.log("Listening on port 3001")
})
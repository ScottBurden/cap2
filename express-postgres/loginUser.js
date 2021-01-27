const db = require("./db");
const express = require("express");
const router = express.Router();

//  API route for Node app to send requests in order to retreive data from PostgresQL 
//  with POST route for login and GET route that only catches errors

router.get('/', async (req, res, next) => {
    try {
        const results = await db.query(
        `SELECT * FROM users`
        )
        return //res.json(results.rows)
    }
    catch(err) {
        return next(err)
    }

})


router.post('/', async (req, res, next) => {
    try {
        //TODO route to authenticate user with data in db
        //const { user, pwd } = res.body;
        const { user } = res.body
        const results = await db.query(
        `SELECT * 
        FROM users 
        WHERE username=$1`, 
        [user]
        )
        return res.json(results.rows)
        //TODO return db data after authentication
        //if (pwd === results.password){
        //return res.json(results.rows)}
    }
    catch(err) {
        return next(err)
    }
})

module.exports = router;
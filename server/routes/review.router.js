const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.post('/', (req, res) => {
    const review = req.body

    

    const sqlText = `INSERT INTO feedback (feeling, understanding, support, comments)
    VALUES ($1, $2, $3, $4)`;

    pool.query(sqlText, [review.feeling, review.understanding, review.support, review.comments])
        .then((result) => {
            console.log("Added review to database", review);
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log(`Error making database query`, error);
            res.sendStatus(500);
        });

});


module.exports = router;


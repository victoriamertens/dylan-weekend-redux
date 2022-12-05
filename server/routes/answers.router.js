const {query} = require('express');
const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
//not sure why query is greyed out as well


// having major trouble figuring this end of the project out
// not sure if my post route of '/' matches with my post in Review.jsx of './answers'

router.post('/', (req, res) => {
    console.log(req.body);
    const answers = req.body;
    pool.query(`INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
    VALUES ($1, $2, $3, $4);`, [Number(answers.feelingAnswer),  Number(answers.understandAnswer), Number(answers.supportAnswer), answers.commentAnswer]
    ).then((result) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log('Error POST /answers', error);
        res.sendStatus(500);
    });
})


module.exports = router;
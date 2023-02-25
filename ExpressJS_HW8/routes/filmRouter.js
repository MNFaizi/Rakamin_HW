const express = require('express');
const router = express.Router();

const db = require('../db/dbconnect');

router.get('/film', (req, resp) => {
    db.query('select * from film order by film_id asc', (err, res) => {
        if(err){
            throw err
        }
        resp.status(200).json(res.rows);
    });
});

router.get('/film/:id', (req, resp) => {
    const id = parseInt(req.params.id);
    db.query('select * from film where film_id = $1', [id] ,(err, res) => {
        if(err){
            throw err;
        }
        resp.status(200).json(res.rows[0])
    })
})

module.exports = router;
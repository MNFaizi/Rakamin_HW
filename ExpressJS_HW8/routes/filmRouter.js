const express = require('express');
const router = express.Router();

const db = require('../db/dbconnect');

// Get all film list
router.get('/film', (req, resp) => {
    db.query('select * from film order by film_id asc', (err, res) => {
        if(err){
            throw err
        }
        resp.status(200).json(res.rows);
    });
});

// get film by id
router.get('/film/:id', (req, resp) => {
    const id = parseInt(req.params.id);
    db.query('select * from film where film_id = $1', [id] ,(err, res) => {
        if(err){
            throw err;
        }
        resp.status(200).json(res.rows[0])
    })
});

// add new film list to database
router.post('/film' , (req, resp) => {
    const {title, description, release_year, language_id, rental_duration, rental_rate, length, replacement_cost, rating, last_update, special_features, fulltext} = req.body;
    const inputQuery = `
                INSERT INTO 
                    film
                        (title, description, release_year, language_id, rental_duration, rental_rate, length, replacement_cost, rating, last_update, special_features, fulltext)
                    VALUES 
                        ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
    `
    db.query(inputQuery, [title, description, release_year, language_id, rental_duration, rental_rate, length, replacement_cost, rating, last_update, special_features, fulltext], (err, res) => {
        if(err){
            throw err
        }
        resp.status(201).json({
            message: `New film ${title} has been successfull add to database`
        });
    })
})

router.put('/film/:id', (req, resp) => {
    const id = req.params.id;
    const {title, description, release_year, language_id, rental_duration, rental_rate, length, replacement_cost, rating, last_update, special_features, fulltext} = req.body;
    const updateQuery = `
                
    `
})

module.exports = router;
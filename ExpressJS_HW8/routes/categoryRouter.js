const express = require('express');
const router = express.Router();

const db = require('../db/dbconnect');

router.get('/category', (req,resp) => {
    db.query('select * from category order by category_id asc', (err, res) => {
            if(err){
                throw err;
            }
            resp.status(200).json(res.rows);
        })
})

router.get('/:category', (req, resp) => {
    const categoryName = req.params.category;
    db.query('select * from film_category inner join film on film_category.film_id = film.film_id inner join category on film_category.category_id = category.category_id where category.name = $1', [categoryName], (err, res) => {
        if(err){
            throw err
        }
        resp.status(200).json(res.rows);
    })
})

module.exports = router;
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

router.get('/category/:categoryname', (req, resp) => {
    const categoryName = req.params.categoryname;
    // const categoryQuery = `select 
    //                             film.film_id as id,
    //                             film.title as title,
    //                             film.description as description,
    //                             film.release_year as release_year,
    //                             category.name as category
    //                         from 
    //                             film
    //                             inner join film_category
    //                                 on film.film_id = film_category.film_id
    //                             inner join category
    //                                 on category.category_id = film_category.film_id
    //                             where film_category = $1`
    db.query('select * from category where name = $1', [categoryName], (err, res) => {
        if(err){
            throw err
        }
        resp.status(200).json(res.rows[0]);
    })
})

module.exports = router;
const express = require('express');
const router = express.Router();

const db = require('../db/dbconnect');

// get all list category
router.get('/category', (req,resp) => {
    db.query('select * from category order by category_id asc', (err, res) => {
            if(err){
                throw err;
            }
            resp.status(200).json(res.rows);
        })
})

// get list film with category name
router.get('/:category', (req, resp) => {
    const categoryName = req.params.category;
    db.query('select * from film_category inner join film on film_category.film_id = film.film_id inner join category on film_category.category_id = category.category_id where category.name = $1', [categoryName], (err, res) => {
        if(err){
            throw err
        }
        resp.status(200).json(res.rows);
    })
})

// add some new category name
router.post('/category/:id', (req, resp) => {
    const id = parseInt(req.params.id);
    const {title, last_update} = req.body;
    const insertQuery = `
                insert into category (category_id, name, last_update)
                    VALUES
                        ($1, $2, $3)
    `
    db.query(insertQuery, [id, title, last_update], (err, res) => {
        if(err){
            throw err;
        }
        resp.status(201).json({
            message: "New Category Successfull Add"
        })
    })
})


// edit database router
router.put('/category/:id', (req, resp) => {
    const id = parseInt(req.params.id);
    const {title, last_update} = req.body;
    const editQuery = `
                UPDATE category 
                    SET name = $1,
                        last_update = $2
                    WHERE category_id = $3
    `
    db.query(editQuery, [title, last_update, id], (err, res) => {
        if(err){
            throw err
        }
        resp.status(200).json({
            message: `Category ${id} was updated to ${title}`
        })
    })
})

// delete category name
router.delete('/category/:id', (req, resp) => {
    const {id} = req.params;
    const findQuery = `
                SELECT * FROM category WHERE category_id =$1
    `
    db.query(findQuery, [id], (err, res) => {
        if(err){
            throw err
        }
        if(!res.rows[0]){
            resp.status(404).json({
                message: `category ${id} not found`
            })
        }
        else{
            const deleteQuery = `
                    DELETE FROM category WHERE category_id = $1
            `
            db.query(deleteQuery, [id], (err, res) => {
                if(err){
                    throw err
                }
                else{
                    resp.status(200).json({
                        message: `Category with id : ${id} successfull deleted`
                    })
                }
            })
        }
    })
})
module.exports = router;
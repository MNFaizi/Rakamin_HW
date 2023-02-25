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

router.get('/category/:id', (req, resp) => {
    const id = parseInt(req.params.id);
    db.query('select * from category where category_id=$1', [id], (err, res) => {
        if(err){
            throw err
        }
        resp.status(200).json(res.rows[0]);
    })
})

module.exports = router;
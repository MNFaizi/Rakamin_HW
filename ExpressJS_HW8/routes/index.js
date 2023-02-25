const express = require('express');
const router = express.Router();

router.get('/', (req, resp,next) => {
    resp.send('This Index Page');
})

module.exports = router;
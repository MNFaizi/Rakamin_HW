const express = require('express');
const app = express();


const filmRouter = require('./routes/filmRouter');
const categoryRouter = require('./routes/categoryRouter');

// menerima format json
app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.use(filmRouter);
app.use(categoryRouter);


app.listen(3000, () => {
    console.log(`App running on port 3000`);
});

module.exports = app;
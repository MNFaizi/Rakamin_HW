const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'mochamadnurfaizi',
    password: '',
    host: 'localhost',
    port: 5432,
    database: 'dvdrental',
})

module.exports = pool;
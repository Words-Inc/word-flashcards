const { Pool } = require('pg');
console.log('UPDATE URL')
const myURI = 'PUT URL IN';

const URI = process.env.PG_URI || myURI;

const pool = new Pool({
    connectionString: URI,
});

module.exports = {
    query: (text, params, callback) => {
        console.log('executed query', text);
        return pool.query(text, params, callback);
    }
};
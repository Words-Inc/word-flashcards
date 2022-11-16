const { Pool } = require('pg');
console.log('UPDATE URL')
const myURI = 'postgres://oozmhsaz:02gALxLEOfMOAFFROxFBKKmdT_dmUgaH@heffalump.db.elephantsql.com/oozmhsaz';

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
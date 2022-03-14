const {Client} = require('pg');


const client = new Client({


    user: 'postgres',
    password: 'Universalpass1@',
    host: 'localhost',
    database: 'demo',
    port: 5432,

});


client.connect();

client.query('select * from demo_table', (err, result) => {
    if(!err) {
        console.log(result.rows);
    }
    client.end();
})
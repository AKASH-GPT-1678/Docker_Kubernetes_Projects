// import pkg from 'pg';
// const { Client } = pkg;
// const pool = new Client({
//     user: 'postgres',

//     host: 'localhost',

//     database: 'Smat_city',

//     password: 'guptapc123',

//     port: 5432, 

// })


// async function queryDatabase() {

//     try {

//         const client = await pool.connect();

//         const result = await client.query('SELECT * FROM your_table');

//         console.log(result.rows); // Access the fetched data

//         client.release();

//     } catch (err) {

//         console.error('Error executing query', err);

//     }

// }



// queryDatabase();

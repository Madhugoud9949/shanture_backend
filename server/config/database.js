const mysql = require('mysql');
const util = require('util');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456789',
  database: 'todo_db'
});


const query = util.promisify(connection.query).bind(connection);


connection.connect();


query('SELECT * FROM tasks')
  .then(results => {
    console.log('Tasks:', results);
  })
  .catch(err => {
    console.error('Error executing query', err);
  })
  .finally(() => {
    
    connection.end();
  });

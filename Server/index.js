const express = require('express');
const mysql = require('mysql');
const app = express();


// app.use(cors());
app.use(express.json());

const pool = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    port: 3306,
    password: '',
    database: 'schooldb'
});
pool.connect(function(err) {
    if (err) {
      return console.error('error: ' + err.message);
    }
  
    console.log('Connected to the MySQL server.');
  });

  app.get('/', (req, res) => {

    res.send("hello Server!");
})

// pool.then(function(p){
    
//   return  p.getConnection()
    
// }).then(function(){

//  // here the query is executed
// })


app.get('/text', (req, res) => {
  pool.getConnection((err, connection) => {
      if(err) throw err
      console.log('connected as id ' + connection.threadId)
      connection.query('SELECT * from teachers', (err, rows) => {
          connection.release() // return the connection to pool

          if (!err) {
              res.send(rows)
          } else {
              console.log(err)
          }

          // if(err) throw err
          console.log('The data from beer table are: \n', rows)
      })
  })
})




  
app.listen(3001,()=>{
    console.log('listening on http://localhost')
})
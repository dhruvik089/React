const express = require('express');
const port = 1188;
const cors = require('cors')
// const sql = require('mssql')

// const config = {
//   user: "sa",
//   password: "sit@123",
//   server: "192.168.1.117",
//   database: "dhruvik",
//   "options": {
//     "encrypt": false
//   }
// }



// const pool =new sql.ConnectionPool(config);
// pool.connect().then((e) => {
//   console.log('Connect to sql server');

//   const query = 'SELECT * FROM orders6';

//   return e.request().query(query)
// }).then((result) => {
//   console.log(result.recordset);
// pool.close()
// })
// .catch((err) => {
// console.error(err);
// pool.close();
// });

const app = express();
app.use(cors())
// const config = 'mongodb+srv://dhruvikpatel089:9M7MNukjZ9d5klLn@dhruvik089.q4fcajn.mongodb.net/?retryWrites=true&w=majority&appName=dhruvik089'

app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.get('/login', (req, res) => {
  res.send('Hello World!');
})
app.post('/login', (req, res) => {
  console.log(req.body);
  console.log('hello world!');
});

app.listen(port, () => {
  console.log("server listening");
});


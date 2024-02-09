const express = require('express')
const mysql = require('mysql')

const app = express();
const port = 3000;

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Connected to database');
});

app.get('/create-people', (req, res) => {

  db.query('INSERT INTO people (nome, password) VALUES ("Fulano", "detal");', (err, result) => {
    if (err) {
      throw err;
    }
    res.send('<h1>Full Cycle Rocks!</h1>');
  });
});

app.get('/list-people', (req, res) => {

  db.query('SELECT * FROM people;', (err, result) => {
    if (err) {
      throw err;
    }
    res.json({result});
  });
});

app.listen(port, () => {
  console.log(`Server start`);
});

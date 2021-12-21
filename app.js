const express = require('express');
const path = require('path');
var session = require('express-session');
const app = express();
app.use(express.urlencoded({extended:false}));
app.use(express.json());
const conexion = require('./databases/db');
app.use('/', require('./ruta.js'));
app.use(session({secret: '123456', resave: true, saveUninitialized: true}));

const port = process.env.PORT || 8000;

// sendFile will go here
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, './index'));
});
app.use(session({
  secret:'biblioteca',
  resave: true,
  saveUninitialized: true,
  cookie: {
      maxAge: 60 * 1000 * 30
  }
}));

app.listen(port);
console.log('Server started at http://localhost:' + port);





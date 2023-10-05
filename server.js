process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const express = require('./config/express');

const app = express();
app.set('view engine', 'ejs'); //
app.listen(1004);

module.exports = app;

console.log("Server is running.... ");
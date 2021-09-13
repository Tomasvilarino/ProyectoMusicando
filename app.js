var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
// var generosController = require("./routes/generos");
var cancionesRouter = require("./routes/canciones");


var app = express();





 
//app.use("/", generosController);
app.use("/", cancionesRouter);

console.log("El programa esta iniciado.");

module.exports = app;

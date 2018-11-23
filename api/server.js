const express=require('express');
const app=express();
const searchRoute=require('./routes/search');
const logger=require('morgan');
const mongoose=require('mongoose');

//Database Connection
mongoose.connect(
  "mongodb://localhost:27017/myBlog",
  { useNewUrlParser: true }
);

//Middlware for logging, Json parsing, decoding url
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(function (req, res, next) {
  console.log('middleware working')
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', "Origin, X-Requested-With, Content-Type, Accept, x-auth");
  next();
});

//Routes to the API
app.use('/', searchRoute);

//Error Logger
// app.use(function (req, res, next) {

//   next();
// });

//connection establishment on port 3000
console.log("Server Running on http://localhost:3000/");
app.listen(3000);

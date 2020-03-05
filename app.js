const path = require('path');
const express = require('express');
const ejs = require('ejs');
const pageInfo = require('./pageInfo');

const app = express();

app.set('view engine','ejs');


app.use(express.urlencoded({ extended: false }));


app.get('/',function(req, res) {  
  res.render('index',pageInfo.index);
});

app.get('/gallery',function(req, res) {  
  res.render('gallery',pageInfo.gallery);
});

app.get('/resources',function(req, res) {  
  res.render('resources',pageInfo.resources);
});

app.get('/register',function(req, res) {  
  res.render('register',pageInfo.register);
});


app.get('/register/new',function(req, res) {  
  res.render('register-new',pageInfo.newRegister);
});


app.post('/register/new',function(req, res) {  
  res.render('register-new',pageInfo.newRegister);
});



app.use(express.static(path.join(__dirname, 'public')));


app.use(function(req, res, next) {
  res.status(404);
  res.send('404: File Not Found');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, function(){
  console.log(`Listening on port ${PORT}`);
});
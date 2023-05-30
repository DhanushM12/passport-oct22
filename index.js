const express = require('express');
const app = express();
const port = 8080;
const passport = require('passport');
const session = require('express-session')
const initialize = require('./config/passportLocal')
const bcrypt = require('bcrypt');

initialize(passport, 
    email => users.find(user => user.email === email), 
    id => users.find(user => user.id === id))

app.set('view engine', 'ejs')

app.use(express.urlencoded({extended: false}))

app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false
}))

app.use(passport.initialize())

app.listen(port, function(err){
    if(err){
        console.log(`Error in setting up the server : ${err}`)
        return;
    }
    console.log(`Server is up and running on port : ${port}`)
})
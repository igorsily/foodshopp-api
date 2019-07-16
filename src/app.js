const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');

const app = express();

require('./configs/auth')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', require('./routes/routes'));
app.use('/', passport.authenticate('jwt', { session: false }), require('./routes/secure-routes'));

app.use(function(err, req, res, next) {
    console.log(err);
    
    res.status(err.status || 500);
    res.json({ error : err });
  });

module.exports = app;
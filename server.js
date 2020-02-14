const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const passport = require('passport');
const session = require('express-session');
const cors = require('cors');

// Initioalizations
const { mongoose } = require('./database');
require('./passport/local-auth');

// Configuraciones
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
/*app.use(session({
    secret: '',
    resave: false,
    saveUninitialized: false
}));*/
app.use(passport.initialize());
//app.use(passport.session());

// Routes
app.use('/api/estudiantes', require('./routes/estudiantes.routes'));
app.use('/api/docentes', require('./routes/docentes.routes'));
app.use('/api/users', require('./routes/users.routes'));

// Static files
app.use(express.static(path.join(__dirname, 'public/www')));

// error handlers
// Catch unauthorised errors
app.use(function (err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
        res.status(401);
        res.json({"message" : err.name + ": " + err.message});
    }
});

// Starting the server
app.listen(app.get('port'), () => {
    console.log('Server on port ' + app.get('port'));
});

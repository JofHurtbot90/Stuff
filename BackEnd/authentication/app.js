const express = require('express');
const PORT = process.env.PORT || 5000;
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const app = express();
const expressJwt = require('express-jwt');
require('dotenv').config();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use('/api', expressJwt({secret: process.env.SECRET}));

mongoose.set('useCreateIndex', true);
mongoose.connect('mongodb://localhost:27017/authentication'
    {userNewUrlParser: true},
    (err) => {
        if (err) throw err;
        console.log('Connected to the database');
    }
); 

app.use('/todo', require('./routes/todo'));
app.use('/auth', require('./routes/auth'));
app.use('/api/todo', require('./routes/todo'));

app.use((err, req, res, next) =>{
    console.error(err);
    if (err.name === 'UnauthorizedError') {
        res.status(err.status);
    }
    return res.send({message: err.message});
});

app.listen(PORT, () =>{
    console.log(`[+] Starting server on port ${PORT}`);
});

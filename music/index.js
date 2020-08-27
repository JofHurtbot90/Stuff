const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 5000;
require('dotenv').config();
const expressJwt = require('express-jwt');

app.use(morgan('dev'));
app.use(express.json());

mongoose.set('useCreateIndex', true);
mongoose.connect('mongodb://localhost:27017/music-app',
{useNewUrlParser: true},
(err) => {
    if (err) throw err;
    console.log('Connected to the database');
    }
);

app.use((err, req, res, next) => {
    console.error(err);
    if (err.name === 'UnauthorizedError') {
        res.status(err.status)
    }
    return rs.send({ message: err.message });
});

app.listen(PORT, () => {
    console.log(`[+] Starting server on port${PORT}`);
});
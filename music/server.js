const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 5000;
require('dotenv').config();
const expressJwt = require('express-jwt');


app.use(morgan('dev'));
app.use(express.json());
app.use('/api', expressJwt({ secret: process.env.SECRET}));

app.use('/artists/{artist_id}', require('./routes/musicRouter'));
app.use('/artists/{artist_id}/releases/{?sort,sort_order}', require('./routes/musicRouter'));
app.use('/labels/{label_id}', require('./routes/musicRouter'));
app.use('/labels/{label_id}/releases{?page,per_page}', require('./routes/musicRouter'));

app.use(express.static(path.join(__dirname, 'client', 'build')));

app.use((err, req, res, next) => {
    console.error(err);
    if (err.name === 'UnauthorizedError') {
        res.status(err.status);
    }
    return res.send({ message: err.message });
});


app.use((err, req, res, next) => {
    console.error(err);
    if (err.name === 'UnauthorizedError') {
        res.status(err.status)
    }
    return res.send({ message: err.message });
});

mongoose.set('useCreateIndex', true);
mongoose.connect('mongodb://localhost:27017/sudo-music',
{ useNewUrlParser: true },
(err) => {
    if (err) throw err;
    console.log('Connected to the database');
    }
);
app.get((req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});


app.listen(PORT, () => {
    console.log(`server running on Port: ${PORT}.............`);
});
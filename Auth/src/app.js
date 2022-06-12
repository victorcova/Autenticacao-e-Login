const express = require('express');
const app = express();
const router = express.Router();
const Database = require('./database');
const index = require('./routes/index');
const userRoute = require('./routes/user');

app.use(express.json());

app.use('/', index);
app.use('/user', userRoute);
module.exports = app;
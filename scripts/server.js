if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config(); // if we are not in priduction mode - it will load all variables from .env file
} 

const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');

const indexRouter = require('../routes/index');

app.set('view engine', 'ejs'); // kind of HTML engine
app.set('views', './views'); // all different views folder
app.set('layout', 'layouts/layout'); // layout that kepp header, footer and other repeatable elements
app.use(expressLayouts);
app.use(express.static('public')); // where our styles and images - public files

const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', error => console.log(error));
db.once('open', () => console.log('connected to mongoose'));

app.use('/', indexRouter);

app.listen(process.env.PORT || 3000);
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const logger = require('morgan');

//const routes = require('./routes/api');

const app = express();

app.use(logger('dev'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

//connects to mongoose
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to the db instance'))
    .catch((err) => {
        console.log(`Error ${err}`);
    });

//app.use(routes);
app.use(require('./routes/html.js'));
app.use(require('./routes/api.js'))

const port = process.env.PORT || 1759;
app.listen(port, () => {
    console.log(`App is running on port ${port}`);
});





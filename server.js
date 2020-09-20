require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//connects to mongoose
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to the db instance'))
    .catch((err) => {
        console.log(`Error ${err}`);
    })

const port = process.env.PORT || 1759;
app.listen(port, () => {
    console.log(`App is running on port ${port}`);
})





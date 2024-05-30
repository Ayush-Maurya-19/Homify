require('dotenv').config();  // Load environment variables from a .env file
const mongoose = require('mongoose');

const url = process.env.MONGOOSE_API;  // Use the environment variable directly

// Asynchronous - returns a Promise
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Database connected successfully');
    })
    .catch((err) => {
        console.log('Error connecting to the database', err);
    });

module.exports = mongoose;

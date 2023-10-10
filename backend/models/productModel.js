const { model, Schema } = require('../connection');

const mySchema = new Schema({
    name : String,
    location : String,
    address : String,
    type : String,
    price : Number,
});

module.exports = model( 'products', mySchema );
const { model, Schema } = require('../connection');

const mySchema = new Schema({
    name : String,
    location : String,
    address : String,
    category : String,
    image : String,
    price : Number,
    rating : Number,
    reviews: Number
});

module.exports = model( 'products', mySchema );
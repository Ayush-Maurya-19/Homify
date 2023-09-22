const { model, Schema } = require('../connection');

const mySchema = new Schema({
    title : String,
    category : String,
    price : Number,
    rating : Number
});

module.exports = model( 'products', mySchema );
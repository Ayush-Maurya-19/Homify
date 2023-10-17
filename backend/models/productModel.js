const { model, Schema } = require('../connection');

const mySchema = new Schema({
    user_id : String,
    name : String,       //New PG
    location : String,  //Gomti Nagar
    city : String,     //lucknow
    category : String, //type of property
    image : String,
    price : Number,
    rating : Number,
    reviews: Number
});

module.exports = model( 'products', mySchema );
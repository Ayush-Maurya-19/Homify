const { model, Schema } = require('../connection');

const mySchema = new Schema({
    property_name: String,
   name: String,
    email: String,
    check_in: String,
    phone: Number,
    address: String,
});

module.exports = model( 'orders', mySchema );
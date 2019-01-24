const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const productSchema= new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    code: Number,
    description: String,
    price: Number,
    stock: Number,
    products : Number,
},{ timestamps: true});

const Product = mongoose.model('Product',productSchema);

module.exports = Product;

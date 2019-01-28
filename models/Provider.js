const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const providerSchema= new mongoose.Schema({
    code: Number,
    names: String,
    surnames: String,
    andress: String,
    province: String,
    telephone: Number,
    
},{timestamps: true});

const Provider = mongoose.model('Provider',providerSchema);

module.exports= Provider;
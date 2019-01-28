const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const storeSchema =  new mongoose.Schema({
    _id : mongoose.Schema.ObjectId,
    codeStore : String,
    producto: { type: Schema.Types.ObjectId , ref:'Product'},
    proveedor: { type: Schema.Types.ObjectId , ref: 'Provider'},
    quantity: Number 
});

const Store = mongoose.model('Store', storeSchema);
module.exports = Store;
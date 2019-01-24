/*const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const relationship = require("mongoose-relationship");

const userSchema =new mongoose.Schema({
    ticket:[{ type:Schema.ObjectId, ref:"Ticket" }]
});
const User = mongoose.model("User", userSchema);
 module.exports = User;
const productSchema = new mongoose.Schema({
    ticket:[{ type:Schema.ObjectId, ref:"Ticket" }]
});
const Product = mongoose.model("Product", productSchema);
 module.exports=Product;
const Ticket = new mongoose.Schema({
    user: [{ type:Schema.ObjectId, ref:"User", childPath:"ticket" }],
    product: [{ type:Schema.ObjectId, ref:"Product", childPath:"ticket" }]
});


Ticket.plugin(relationship, { relationshipPathName:['user', 'product'] });
 */
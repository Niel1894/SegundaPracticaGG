const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ticketSchema= new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    cliente:{ type: Schema.Types.ObjectId , ref:'User'},
    producto:{ type: Schema.Types.ObjectId , ref:'Product'},
    amount: Number
},{ timestamps: true});

const Ticket = mongoose.model('Ticket',ticketSchema);

module.exports = Ticket;

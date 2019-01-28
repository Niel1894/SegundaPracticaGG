const Ticket = require('../models/Ticket');
const User = require('../models/User');
const Product = require('../models/Product');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

exports.getTicket = async(req,res) => {

    try {
        const ticket = await Ticket.find()
        .populate({path: 'cliente' , model : User})
        .populate({path: 'producto', model : Product})
        .exec();
    
        if (!ticket) res.status(400).json({ message: 'no ticket were found' })
        console.log(ticket);
        return res.status(200).json({ ticket }) 
    
      } catch (err) {
        return res.send(err);
      }

  }
  
  exports.createTicket = async (req, res) => {
    try {
        
      const newTicket = new Ticket({
          _id: new mongoose.Types.ObjectId,        
          cliente : req.body.cliente,
          producto : req.body.producto,
          amount : req.body.amount

      });
      
      const createTicket = await newTicket.save();
      return res.status(201).json(createTicket);
  
    } catch (err) {
      return res.send(err);
    }
  };
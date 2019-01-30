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

  exports.getOneTicketClient = async (req,res) =>{
    try {
      const ticket = await Ticket.find({ cliente: req.params.id }).populate('cliente producto');
      if (!ticket) return res.status(400).json({ message: 'No documents in Ticket collection' });
      const products = [];
      let monto = 0;
      for (let i = 0; i < ticket.length; i++) {
        products.push(ticket[i].producto);
        products.push({cantidad: ticket[i].amountProducto})
        monto += ticket[i].producto.price;        
      }
      return res.status(200).json({ cliente: ticket[0].cliente, productos: products, monto: monto}) 
    } catch (error) {
      console.log(error);
      return res.send(error)
    }
  }
  
  exports.createTicket = async (req, res) => {
    try {
        
      const newTicket = new Ticket({
          _id: new mongoose.Types.ObjectId,        
          cliente : req.body.cliente,
          producto : req.body.producto,
          amountProducto : req.body.amountProducto

      });
      
      /*Product.findById(req.body.producto).then((producto) =>{
        Product.findByIdAndUpdate(req.body.producto,{$set : req.body.stock}).then((producto) =>{
          res.send(producto);
        } )
        producto.stock = producto.stock - req.body.amountProducto;
        producto.save();
      });*/

      const product = await Product.findById(req.body.producto);
      product.stock = product.stock - req.body.amountProducto;
      product.save();

      const createTicket = await newTicket.save();
      return res.status(201).json(createTicket);
  
    } catch (err) {
      return res.send(err);
    }
  };

  exports.deleteTicket = async (req,res) =>{
  try{
     Ticket.deleteOne({_id: req.params.id}).then(() =>{
       Ticket.findOne({_id: req.params.id}).then(()=>{
        res.status(200).json({
          message: "Ticket deleted",
          request: {
            type: "DELETE",
            body: { _id: req.params.id, cliente:req.params.cliente ,producto : req.params.producto}
          }
        });
      })
     });
  } catch (err){
      return res.send(err);
  }

  }

  exports.deleteAllTicket = async(req,res) =>{
      try{
        Ticket.find().remove().then(()=>
        {
          res.status(200).json({
           message: "Tickets delete",
          })
        })
      }catch(err){
         return res.send(err);
      }
  }

  
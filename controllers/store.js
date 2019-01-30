const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Store = require ('../models/Store');
const Provider = require ('../models/Provider');
const Product = require ('../models/Product');

exports.getStore =  async(req,res) => {
    try {
        const store = await Store.find()
        .populate({path:'producto', model: Product})
        .populate({path:'proveedor', model: Provider})
        .exec();
     if(!store) res.status(400).json({message: 'no store were found'})
     console.log(store);
     return res.status(200).json({store})
    }
 catch (err) {
    return res.send(err)
    } 
}
exports.createStore = async (req,res) => {
    try{
        const newStore = new Store({
            _id: new mongoose.Types.ObjectId,
            codeStore: req.body.codeStore,
            producto: req.body.producto,
            proveedor: req.body.proveedor,
            quantity: req.body.quantity
        });

        const createStore = await newStore.save();
        return res.status(201).json(createStore);
    } catch (err){
        return res.send(err);
    }
}

exports.deleteStore = async (req,res) =>{
    try{
       Ticket.deleteOne({ quantity: { $gt: 0} }).then(() =>{
         Ticket.findOne({_id: req.params.id}).then(()=>{
          res.status(200).json({
            message: "Ticket deleted",
            request: {
              type: "DELETE",
              body: { codeStore : req.params.codeStore}
            }
          });
        })
       });
    } catch (err){
        return res.send(err);
    }
  
    }

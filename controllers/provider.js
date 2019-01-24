const Provider = require('../models/Provider');
const Product = require('../models/Product');

exports.getProvider = async (req, res) => {
  try {
    const provider = await Provider.find();

    if (!provider) res.status(400).json({ message: 'no provider were found' })
    console.log(provider);
    return res.status(200).json({ provider }) 

  } catch (err) {
    return res.send(err);
  }
};

exports.getProviderProduct = async (req, res) => {
    Provider.find()
    .select("_id andress code")
    .populate('products')
    .exec()
    .then(docs => {
      res.status(200).json({
        pedidos : docs.map(doc => {
          return {
            _id:doc._id,
            andress:doc.andress,
            code: doc.code,
            products: doc.products,
            
          };
        })
      });
    })
    .catch(err => {
      res.status(500).json({
        error: err
      });
    });
}
//Codigo para traer el producto

//
exports.createProvider = async (req, res) => {
  try {
    const newProvider = new Provider({
      code: req.body.code,
      names: req.body.names,
      surnames: req.body.surnames,
      andress: req.body.andress,
      province: req.body.province,
      telephone: req.body.telephone
    });

    const createProvider = await newProvider.save();
    return res.status(201).json(createProvider);

  } catch (err) {
    return res.send(err);
  }
};


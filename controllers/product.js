const Product = require('../models/Product');

exports.getProducts = async (req, res) => {
  try {
    const product = await Product.find();

    if (!product) res.status(400).json({ message: 'no product were found' })
    console.log(product);
    return res.status(200).json({ product }) 

  } catch (err) {
    return res.send(err);
  }
};

exports.createProduct = async (req, res) => {
  try {
    const newProduct = new Product({
        code: req.body.code,
        description: req.body.description,
        price: req.body.price,
        stock: req.body.stock
      
    });

    const createProduct = await newProduct.save();
    return res.status(201).json(createProduct);

  } catch (err) {
    return res.send(err);
  } 
};

exports.updateProduct = async (req, res) => {
  try {
      
      Product.findByIdAndUpdate({_id:req.params.id}, {$set: req.body.stock}).then(()=>{
      Product.findOne({_id:req.params.id}).then((product)=>{
        res.send(product);
      })
    });
     
  } catch (err) {
    return res.send(err);
  } 
};


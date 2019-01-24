const User = require('../models/User');

exports.getUsers = async (req, res) => {
  try {
    const user = await User.find();

    if (!user) res.status(400).json({ message: 'no users were found' })
    console.log(user);
    return res.status(200).json({ user }) 

  } catch (err) {
    return res.send(err);
  }
};

exports.createUser = async (req, res) => {
  try {
    const newUser = new User({
      code: req.body.code,
      names: req.body.names,
      surnames: req.body.surnames,
      address: req.body.address,
      telephone: req.body.telephone
    
    });

    const createUSer = await newUser.save();
    return res.status(201).json(createUSer);

  } catch (err) {
    return res.send(err);
  }
};
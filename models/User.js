const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new mongoose.Schema({
	code: Number,
  names: String,
  surnames: String,
  address: String,
  telephone: Number,
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports = User;
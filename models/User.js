const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new mongoose.Schema({
	code: Number,
  names: String,
  surnames: String,
  address: String,
  telephone: Number,
}, { timestamps: true , type: Schema.ObjectId, ref: "User"});

const User = mongoose.model('User', userSchema);

module.exports = User;
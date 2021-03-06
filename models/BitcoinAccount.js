const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./User.js')

const bitcoinAccountSchema = new Schema({
	wif: { type: String, required: true },
	user: { type: Schema.types.ObjectId, ref: 'User'}
}, {timestamps: true});

const BitcoinAccount = mongoose.model('User', bitcoinAccountSchema);

module.exports = BitcoinAccount;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { required } = require('../../config.json').MONGO;

const PaymentSchema = new Schema({
	courseFee: Schema.Types.ObjectId,
	discountAmount: Number,
	discountReason: String,
	feeCollected: Number,
	modeOfPayment: String,
	bank: String,
	dateOfCheck: Date,
	checkNumber: String,
	cardNumber: String,
	transactionId: String,
	nextInstallment: Date
});

const StudentSchema = new Schema({
	eduatlasId: String,
	rollNumber: { type: String, lowercase: true, required },
	name: { type: String, lowercase: true, required },
	email: { type: String, lowercase: true, required },
	address: String,
	contactNumber: String,
	payments: [PaymentSchema]
});

module.exports = StudentSchema;

const mongoose = require('mongoose');

const ParticularSchema = new mongoose.Schema({
  description: String,
  rs: String,
  ps: String,
});

const VoucherSchema = new mongoose.Schema({
  name: String,
  paidTo: String,
  debit: String,
  onAccountOf: String,
  voucherNo: String,
  date: String,
  particulars: [ParticularSchema],
  preparedBy: String,
  authorizedByL1: String,
  authorizedByL2: String,
  totalAmount: Number,
  amountInWords: String,
});

module.exports = mongoose.models.Voucher || mongoose.model('Voucher', VoucherSchema);

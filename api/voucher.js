// api/voucher.js
const connectDB = require('../utils/db');
const Voucher = require('../models/Voucher');

module.exports = async (req, res) => {
  await connectDB();

  if (req.method === 'GET') {
    try {
      const vouchers = await Voucher.find();
      res.status(200).json(vouchers);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  if (req.method === 'POST') {
    try {
      const newVoucher = new Voucher(req.body);
      const saved = await newVoucher.save();
      res.status(201).json(saved);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
};

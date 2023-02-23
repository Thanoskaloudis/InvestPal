import mongoose from "mongoose";

const TransactionSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['buy', 'sell'],
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    required: true,
    default: Date.now
  },
  investment: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Investment'
  }
}, { timestamps: true });

const Transaction = mongoose.model("Transaction", TransactionSchema);

export default Transaction;


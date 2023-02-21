import mongoose from "mongoose";

const InvestmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  value: {
    type: Number,
    required: true
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  transactions: [{
    type: Schema.Types.ObjectId,
    ref: 'Transaction'
  }]
},{ timestamps: true });

const Investment = mongoose.model("Investment", InvestmentSchema);

export default Investment;

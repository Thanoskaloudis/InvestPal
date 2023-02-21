import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  investments: [{
    type: Schema.Types.ObjectId,
    ref: 'Investment'
  }],
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "admin"
  }
}, { timestamps: true });

const User = mongoose.model("User", UserSchema);

export default User;
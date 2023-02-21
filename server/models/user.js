import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      min: 2,
      max: 100
    },
    email: {
      type: String,
      required: true,
      min: 50,
      unique : true
    },
    password: {
      type: String,
      required: true,
      min: 5
    },
    country: String,
    city: String, 
    transactions: Array,
    investments: Array,
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "admin"
    }
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);

export default User;
import mongoose from "mongoose";

const Schema = mongoose.Schema;

const otpSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  otp: { 
    type: String, 
    required: true 
},
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("otp", otpSchema);
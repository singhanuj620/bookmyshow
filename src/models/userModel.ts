import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  fullName: {
    type: String,
    required: true,
  },
  isVerfiied: {
    type: Boolean,
    default: false,
  },
  verificationCode: {
    type: String,
    default: "",
  },
  forgotPasswordCode: {
    type: String,
    default: "",
  },
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;

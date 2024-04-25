import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: [true, "Username required"],
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Email required"],
  },
  password: {
    type: String,
    required: [true, "Password required"],
  },
});

const User = mongoose.model("User", userSchema);

export default User;

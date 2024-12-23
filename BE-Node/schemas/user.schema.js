import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
  nickName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
});

const userModel = mongoose.model("user_dtl", userSchema, "user_dtl");

export { userModel };

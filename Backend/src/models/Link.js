import mongoose from "mongoose";

const linkSchema = new mongoose.Schema({
  code: {
    type: String,
    unique: true,
    required: true,
    match: /^[A-Za-z0-9]{6,8}$/
  },
  longUrl: {
    type: String,
    required: true
  },
  clicks: {
    type: Number,
    default: 0
  },
  lastClicked: {
    type: Date
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Link = mongoose.model("Link", linkSchema);
export default Link;

import mongoose from "mongoose";

const { Schema } = mongoose;

const teaSchema = new Schema({
  name: { type: String, required: true },
  image: String,
  description: String,
  keywords: String,
  origin: String,
  brew_time: Number,
  temperature: Number,
  comments: [{ text: String, date: { type: String, default: new Date() } }],
});

const teaModel = mongoose.model("Tea", teaSchema);

export default teaModel;

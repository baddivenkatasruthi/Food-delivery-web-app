import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
  image: String,
  category: String
});

const Food = mongoose.model("Food", foodSchema);

export default Food; // <-- this is required for default import

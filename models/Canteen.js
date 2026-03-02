import mongoose from "mongoose";

const canteenSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String },
  image: { type: String }, // ✅ Add image field
});

export default mongoose.model("Canteen", canteenSchema);

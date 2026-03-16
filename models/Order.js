import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  items: [
    {
      food: { type: mongoose.Schema.Types.ObjectId, ref: "Food" },
      quantity: Number
    }
  ],
  totalPrice: Number,
  user: String, // could be userId if you implement users later
  status: { type: String, default: "Pending" },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Order", orderSchema);

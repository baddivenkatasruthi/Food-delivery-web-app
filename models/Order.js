// models/Order.js
import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    items: [
      {
        _id: String,
        name: String,
        price: Number,
        quantity: Number,
        image: String,
      },
    ],
    totalAmount: { type: Number, required: true },
    paymentMethod: { type: String, enum: ["COD", "GooglePay", "PhonePe"], required: true },
    status: { type: String, enum: ["Pending", "Paid"], default: "Pending" },
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);

export default Order;

const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  restaurantId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Restaurant"
  },
  items: Array,
  totalAmount: Number,
  status: { type: String, default: "Placed" }
});

module.exports = mongoose.model("Order", orderSchema);

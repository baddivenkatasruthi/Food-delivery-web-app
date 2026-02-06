const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
  orderId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Order"
  },
  paymentMode: String,
  paymentStatus: String
});

module.exports = mongoose.model("Payment", paymentSchema);

const mongoose = require("mongoose");

const deliverySchema = new mongoose.Schema({
  orderId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Order"
  },
  deliveryPerson: String,
  deliveryStatus: String
});

module.exports = mongoose.model("Delivery", deliverySchema);

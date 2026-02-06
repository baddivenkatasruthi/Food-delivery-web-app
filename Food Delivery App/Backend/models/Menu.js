const mongoose = require("mongoose");

const menuSchema = new mongoose.Schema({
  restaurantId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Restaurant"
  },
  itemName: String,
  price: Number,
  available: Boolean
});

module.exports = mongoose.model("Menu", menuSchema);

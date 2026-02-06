const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema({
  name: String,
  location: String,
  isActive: Boolean
});

module.exports = mongoose.model("Restaurant", restaurantSchema);

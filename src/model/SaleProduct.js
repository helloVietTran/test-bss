const mongoose = require("mongoose")

const saleProductSchema = new mongoose.Schema({
  name: String,
  price: Number,
})

module.exports = mongoose.model("SaleProduct", saleProductSchema)
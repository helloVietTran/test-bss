const mongoose = require("mongoose")

const flashSaleSchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "SaleProduct"
  },
  startTime: Date,
  endTime: Date,
  saleStock: Number
})

module.exports = mongoose.model("FlashSale", flashSaleSchema)
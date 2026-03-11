const mongoose = require("mongoose")

const preOrderSchema = new mongoose.Schema({
  phone: {
    type: String,
    required: true
  },

  source:  {
      type: mongoose.Schema.Types.ObjectId,
      ref: "FlashSale"
    },

  createdAt: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model("PreOrder", preOrderSchema)
const mongoose = require("mongoose")

const preOrderSchema = new mongoose.Schema({
  phone: {
    type: String,
    required: true
  },

  source: {
    type: String,
    default: "flash_sale"
  },

  createdAt: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model("PreOrder", preOrderSchema)
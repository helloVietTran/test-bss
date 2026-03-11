const FlashSale = require("../model/FlashSale")
const PreOrder = require("../model/PreOrder")
require("../model/SaleProduct")

const getProduct = async (req, res) => {

  const flashSale = await FlashSale
    .findOne()
    .populate("product")

  if (!flashSale) {
    return res.render("index", {
      product: null,
      message: "No product",
      outOfStock: false
    })
  }

  const now = new Date()

  // kiểm tra thời gian flash sale
  if (now < flashSale.startTime || now > flashSale.endTime) {

    return res.render("index", {
      product: null,
      message: "No product",
      outOfStock: false
    })
  }

  const orderCount = await PreOrder.countDocuments()

  const outOfStock = orderCount >= flashSale.saleStock

  res.render("index", {
    product: flashSale.product,
    message: null,
    outOfStock
  })

}

module.exports = { getProduct }
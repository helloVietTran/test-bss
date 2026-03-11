const PreOrder = require("../model/PreOrder")
const FlashSale = require("../model/FlashSale")

const createOrder = async (req, res) => {

  const { phone } = req.body

  if (!phone || phone.length > 20 ) {
    return res.json({
      message: "Invalid phone"
    })
  }

  const flashSale = await FlashSale.findOne()

  const now = new Date();

  if (now < flashSale.startTime || now > flashSale.endTime) {
    return res.json({
      message: "Flash sale ended"
    })
  }

  const existed = await PreOrder.findOne({ phone })

  if (existed) {
    return res.json({
      message: "Phone already ordered"
    })
  }

  const count = await PreOrder.countDocuments()

  if (count >= flashSale.saleStock) {
    return res.json({
      message: "Out of stock"
    })
  }

  await PreOrder.create({ phone })

  res.json({
    message: "Order success"
  })

}

module.exports = { createOrder }
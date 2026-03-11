require("dotenv").config()

const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
const path = require("path")

const connectDB = require("./config/db")
const orderRoute = require("./route/orderRoute")
const productRoute = require("./route/productRoute")

const app = express()

connectDB()

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))

app.use(cors())
app.use(morgan("dev"))
app.use(express.json())

app.use("/", productRoute)
app.use("/order", orderRoute)

const PORT = 3000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
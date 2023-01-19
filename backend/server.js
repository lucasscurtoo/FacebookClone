const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const dotenv = require("dotenv").config({ path: "../backend/.env" })
const auth = require("./routes/auth")
const morgan = require("morgan")

//config
const app = express()
app.use(express.json())
app.use(cors())
app.use(morgan("dev"))

//database
mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
  })
  .then(() => console.log("database connected successfully"))
  .catch((err) => console.log("error connecting to mongodb", err))

//routes
app.use("/auth", auth)

const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}..`)
})

const express = require("express");
const mongoose = require("mongoose")
require("dotenv").config();
const cors = require('cors')

const app = express();

app.use(express.json())

app.use(cors())
app.use((req,res,next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  )
  next()
})

//importing routes 
const userRoutes = require("../backend/routes/userRoutes")

//establish_routes
app.use("/api/user",userRoutes )



//database connection
mongoose.connect(process.env.DB_URI)
  .then(()=>{
    app.listen(process.env.PORT, ()=>{
      console.log("listening on port:" + process.env.PORT + " and connected to DB");
    })
  })
  .catch((error)=>{
    console.log(error);
  })


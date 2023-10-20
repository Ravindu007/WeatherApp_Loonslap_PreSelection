const express = require("express");
const mongoose = require("mongoose")
require("dotenv").config();

const app = express();

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


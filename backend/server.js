const express = require("express");
require("dotenv").config();

const app = express();

//importing routes 
const userRoutes = require("../backend/routes/userRoutes")

//establish_routes
app.use("/api/user",userRoutes )

app.listen(process.env.PORT, ()=>{
  console.log("listening on port 4000");
})


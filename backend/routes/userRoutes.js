const express = require("express");

const router = express.Router();


//requiring controllers
const {loginUser, signupUser} = require("../controllers/userControllers")


//loginRoute
router.post("/login", loginUser)

//signupRoute 
router.post("/signup",signupUser )

module.exports = router;
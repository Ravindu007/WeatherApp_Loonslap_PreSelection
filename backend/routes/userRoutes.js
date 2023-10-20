const express = require("express");
const multer = require("multer")


const userMiddleware = multer();

const router = express.Router();


//requiring controllers
const {loginUser, signupUser} = require("../controllers/userControllers")


//loginRoute
router.post("/login",userMiddleware.none(), loginUser)

//signupRoute 
router.post("/signup",userMiddleware.none(), signupUser )

module.exports = router;
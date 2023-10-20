//require the user model 
const userModel = require("../models/userModel")
require("dotenv").config();
const jwt = require("jsonwebtoken")


//create a token 
const createToken = (_id) => {
  return jwt.sign({_id:_id}, process.env.SECRET, {expiresIn:'3d'})
}



//signup user 
const signupUser = async(req,res) => {

  const {email, password} = req.body;
  try{
    const user = await userModel.signup(email,password);
    //use create a token wehn sign up
    const token = createToken(user._id)

    res.status(200).json({email, token})
  }catch(error){
    res.status(400).json({error:error.message})
  }
}


//login user 
const loginUser = async(req,res) => {
  const {email, password} = req.body

  try {
    const user = await userModel.login(email, password)

    const token = createToken(user._id)
    res.status(200).json({email, token})
  } catch (error) {
    res.status(400).json({error:error.message})
  }
}

module.exports = {loginUser, signupUser}
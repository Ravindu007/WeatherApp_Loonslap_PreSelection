const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const validator = require("validator")

const Schema = mongoose.Schema

const userSchema = new Schema({
  email:{
    type:String,
    required:true,
    unique:true
  },
  password:{
    type:String,
    required:true,
  }
})


//static sign up method
userSchema.statics.signup = async function(email, password){
  
  //validation
  if(!email || !password) {
    throw Error("Both Email and Password should be provided")
  }

  if(!validator.isEmail(email)){
    throw Error("Invalid Email");
  }

  if(!validator.isStrongPassword){
    throw Error("Password Not strong")
  }
  
  
  const exists = await this.findOne({email})

  if(exists){
    throw Error("Email already in use")
  }

  //hash the password 
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = await this.create({email, password:hashedPassword});

  return user;
}

//static login method
userSchema.statics.login = async function(email, password){

  if(!email || !password){
    throw Error("Both Email and Password should be provided")
  }

  const user = await this.findOne({email})

  if(!user){
    throw Error("Email Incorrect")
  }

  //match the email with password
  const match = await bcrypt.compare(password, user.password)

  if(!match){
    throw Error("Password incorrect")
  }

  return user;
}

module.exports = mongoose.model('user', userSchema);
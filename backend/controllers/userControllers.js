//login user 
const loginUser = async(req,res) => {
  res.json({msg:"Login user"});
}


//signup user 
const signupUser = async(req,res) => {
  res.json({msg:"Sign up user"});
}

module.exports = {loginUser, signupUser}
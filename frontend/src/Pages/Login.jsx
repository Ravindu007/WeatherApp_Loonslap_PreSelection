import React, { useEffect, useState } from 'react'
import LoadingCard from '../Components/serachComponent/LoadingCard'
import {useLogin} from  '../hooks/useLogin'
import useTextAnimation from '../hooks/UseTextAnnimation';

const Login = () => {

  // text annimation
  const texts = ['Mickey Arthur'];
  const loginText = useTextAnimation(texts, 100, 100);

  const [email, setEmail] = useState("")
  const [password,setPassword] = useState("")

  const {login, error, isLoading} = useLogin()

  const handleSubmit = async(e) => {
    e.preventDefault()

    await login(email, password)
  }

  return (
    <div className='login'>
      <div className="container">
        <div className="row">

          {/* left part */}
          <div className="d-none d-sm-block col-md-7">
            <div className="container flex flex-col h-100 sm:h-2/3 justify-center items-center">
              <LoadingCard/>
            </div>
          </div>

          {/* right part */}
          <div className="col-sm-12 col-md-5">
            <div className="form-container h-fit md:h-screen flex flex-col items-center justify-center">
                  {/* login form */}
                  <form className='w-full px-4' onSubmit={handleSubmit}>
                    <h1 className='text-3xl'>Hi  {loginText}</h1>
                    <div className="form-group">
                      <label>Email</label>
                      <input 
                        type="email" 
                        required
                        className='form-control'
                        onChange={(e)=>{setEmail(e.target.value)}}
                        value={email}
                      />
                    </div>
                    <div className="form-group">
                      <label>Password</label>
                      <input 
                        type="password" 
                        required
                        className='form-control'
                        onChange={(e)=>{setPassword(e.target.value)}}
                        value={password}
                      />
                    </div>
                    {error && <small>{error}</small>}

                    <div className="form-group">
                    <button className='btn btn-outline-primary' disabled={isLoading}>Login</button>
                    </div>
                  </form>
            </div>
          </div>


        </div>
      </div>
    </div>
  )
}

export default Login
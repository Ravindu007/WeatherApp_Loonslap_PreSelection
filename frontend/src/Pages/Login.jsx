import React, { useState } from 'react'
import LoadingCard from '../Components/serachComponent/LoadingCard'

const Login = () => {

  const [emai, setEmail] = useState()
  const [password,setPassword] = useState()

  const handleSubmit = async(e) => {
    e.preventDefault()
    
  }

  return (
    <div className='login'>
      <div className="container">
        <div className="row">

          {/* left part */}
          <div className="d-none d-sm-block col-md-7">
            <div className="container flex h-screen sm:h-2/3 justify-center items-center">
              <LoadingCard/>
            </div>
          </div>

          {/* right part */}
          <div className="col-sm-12 col-md-5">
            <div className="form-container border-2 border-red h-fit md:h-screen flex flex-col items-center justify-center">
                  {/* login form */}
                  <form className='w-full px-4' onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label>Email</label>
                      <input 
                        type="email" 
                        required
                        className='form-control'
                        onChange={(e)=>{setEmail(e.target.value)}}
                        value={emai}
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
                    <small className='error'></small>

                    <div className="form-group">
                    <button className='btn btn-outline-primary'>Login</button>
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
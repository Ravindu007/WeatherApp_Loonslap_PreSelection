import { useState } from "react";
import {useAuthContext} from '../hooks/UseAuthContext'


export const useLogin = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const {dispatch} = useAuthContext()


  const login = async(email,password) => {
    setIsLoading(true)
    setError(null)

    const response = await fetch("http://localhost:4000/api/user/login", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password }) // Assuming email and password are variables
});


    const json = await response.json()
    if(!response.ok){
      setIsLoading(false)
      setError(json.error)
    }

    if(response.ok){
      localStorage.setItem('user', JSON.stringify(json))

      dispatch({type:"LOGIN", payload:json})

      setIsLoading(false)
    }
  }

  return {isLoading, error, login}
}
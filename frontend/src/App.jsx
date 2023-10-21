
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Home from './Pages/Home'
import Navbar from './Components/Navbar/Navbar'
import Login from './Pages/Login'
import { useAuthContext } from './hooks/UseAuthContext'

function App() {

  const {user} = useAuthContext()
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Home Page Router */}
          <Route path="/" element={user ? <Home/> : <Navigate to="/login"/>}/>
          <Route path='/login' element={!user ? <Login/> : <Navigate to="/" />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

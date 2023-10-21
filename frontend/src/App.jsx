
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import Navbar from './Components/Navbar/Navbar'
import Login from './Pages/Login'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Home Page Router */}
          <Route path="/" element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

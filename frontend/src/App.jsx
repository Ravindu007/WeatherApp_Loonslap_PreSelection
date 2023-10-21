
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import Navbar from './Components/Navbar/Navbar'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Home Page Router */}
          <Route path="/" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

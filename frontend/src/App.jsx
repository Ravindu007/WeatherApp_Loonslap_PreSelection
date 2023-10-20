
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'

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

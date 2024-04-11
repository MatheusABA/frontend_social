/* eslint-disable no-unused-vars */
import { BrowserRouter, Routes, Route } from 'react-router-dom'


// pages & components
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Cadastro from './pages/Cadastro'

// app

function App() {

    
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cadastro" element={<Cadastro />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

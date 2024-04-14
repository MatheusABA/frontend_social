/* eslint-disable no-unused-vars */
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ChakraProvider } from  '@chakra-ui/react'
import { React } from  'react'
import { useState } from 'react'


// pages & components
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Cadastro from './pages/Cadastro'
import HomeLogged from  './pages/HomeLogged'

// app

function App() {

const [isLogged, setIsLogged] = useState(false)

  return (
    <ChakraProvider>
      <BrowserRouter>
        <Navbar isLogged={isLogged}/>
        <div className="pages">
          <Routes>
            <Route path="/" element={isLogged ? <HomeLogged /> : <Home />} />
            <Route path="/cadastro" element={<Cadastro />} />
            
          </Routes>
        </div>
      </BrowserRouter>
    </ChakraProvider>
      
  );
}

export default App;

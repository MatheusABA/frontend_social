/* eslint-disable no-unused-vars */
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ChakraProvider } from  '@chakra-ui/react'
import { React } from  'react'
import { useState, useEffect } from 'react'


// pages & components
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Cadastro from './pages/Cadastro'
import HomeLogged from  './pages/HomeLogged'
import Upload  from "./pages/Upload"
import UploadDetails  from "./pages/UploadDetails"
import Profile from './pages/Profile'
import ProfileEdit from './pages/ProfileEdit'
import SerProPage from './pages/SerProPage'
import Courses from './pages/Courses'
import Live from './pages/Live'
import { UserProfileProvider } from './components/UserProfileContext'
import { getToken } from './api/auth'
import Peoples from './pages/Peoples'
import Offices from './pages/Offices'

// app

function App() {

const [isLogged, setIsLogged] = useState()
const [isUpload, setIsUpload] = useState(false)

useEffect(() => {
  const token = getToken();
  if (token) {
    setIsLogged(true);
  }
}, []);

  return (
    <ChakraProvider>
      <UserProfileProvider>
        <BrowserRouter>
            <Navbar isLogged={isLogged} setIsLogged={setIsLogged} isUpload={isUpload} setIsUpload={setIsUpload}/>
            <div className="pages">
              <Routes>
                <Route path="/" element={isLogged ? <HomeLogged isUpload={isUpload} setIsUpload={setIsUpload}/> : <Home isUpload={isUpload} setIsUpload={setIsUpload}/>} />
                <Route path="/profile" element={isLogged ? <Profile isUpload={isUpload} setIsUpload={setIsUpload}/> : <Home isUpload={isUpload} setIsUpload={setIsUpload}/>} />
                <Route path='/editprofile' element={isLogged ? <ProfileEdit isUpload={isUpload} setIsUpload={setIsUpload} isLogged={isLogged} setIsLogged={setIsLogged} /> : <Home isUpload={isUpload} setIsUpload={setIsUpload}/>} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/upload" element={<Upload isUpload={isUpload} setIsUpload={setIsUpload}/>} />
                <Route path="/uploaddetails" element={<UploadDetails />} />
                <Route path="/pro" element={<SerProPage/>}/>
                <Route path="/courses" element={<Courses/>}/>
                <Route path="/live" element={<Live/>}/>
                <Route path="/peoples" element={<Peoples/>}/>
                <Route path="/offices" element={<Offices/>}/>
              </Routes>
            </div>
        </BrowserRouter>
      </UserProfileProvider>
    </ChakraProvider>
      
  );
}

export default App;

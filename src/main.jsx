
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Rules from './Componants/pages/Rules/Rules.jsx'
import Navbar from './Componants/home/Navbar.jsx'
import JoinBattle from './Componants/pages/JoinBattle/JoinBattlePage.jsx'
import AboutMePage from './Componants/pages/AboutMe/AboutMePage.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<App />}></Route>
      <Route path='/rules' element={<Rules />}></Route>
      <Route path='/join-battle' element={<JoinBattle />}></Route>
      <Route path='/about-me' element={<AboutMePage />}></Route>
    </Routes>


  </BrowserRouter>

)

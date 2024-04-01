import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import APropos from './pages/APropos'
import FicheLogement from './pages/FicheLogement'
import Error from './pages/Error'

import Header from './components/Header'
import Footer from './components/Footer'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/APropos' element={<APropos />}/>
        <Route path='*' element={<Error />}/>
        <Route path='/FicheLogement/:annonceId' element={<FicheLogement />}/>
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
)

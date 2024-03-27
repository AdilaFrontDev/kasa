import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import APropos from './pages/APropos'
import FicheLogement from './pages/FicheLogement'
import Error from './pages/Error'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/APropos' element={<APropos />}/>
        <Route path='/Error' element={<Error />}/>
        <Route path='/FicheLogement' element={<FicheLogement />}/>
      </Routes>
      
    </Router>
    
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './views/App/App'
import Home from './views/pages/Home/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Signup from './views/pages/SignUp/Signup'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/signup" element={<Signup/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)

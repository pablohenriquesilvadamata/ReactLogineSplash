import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
// import App from './App.tsx'
import './index.css'
import Login from './Login'
import SplashScreen from './SplashScreen'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='login' element={<Login />} />
        <Route path='splashscreen' element={<SplashScreen />} /> 
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)

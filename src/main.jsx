import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Bounce, Flip, Slide, ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')).render(
 
    <>
          <App />
    <ToastContainer theme='dark' position='top-right' transition={Slide} />
  </>
  
)

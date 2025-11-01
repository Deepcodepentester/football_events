import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter,Route,Routes,Link} from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Footer from './footer.jsx'
import Table from './table.jsx'
createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    
    <App />
    
    
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Admin from './AdminPanel/Admin.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google'
import Loginprovider from './Context/Contextlogin.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
     <GoogleOAuthProvider clientId='210262480977-hi5jgp1ac01v0tpmq4jnns7ikf7j3khn.apps.googleusercontent.com'>
      <Loginprovider> 
         <App />
      </Loginprovider>
     </GoogleOAuthProvider> 
    </BrowserRouter>
  </StrictMode>,
)

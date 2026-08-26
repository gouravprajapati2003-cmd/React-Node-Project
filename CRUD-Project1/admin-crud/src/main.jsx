import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import AddMobile from './AddMobile.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <App></App>
    {/* <AddMobile></AddMobile> */}
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Vehicle from './Vehicle'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Vehicle></Vehicle>
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AddBook from './AddBook.jsx'
import AddMobile from './AddMobile.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <AddBook></AddBook> */}
    <AddMobile></AddMobile>
  </StrictMode>,
)

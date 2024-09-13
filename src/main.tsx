import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  // ScritMode: ELe ajudava falando sobre os erros que tem no código ou que podem ocorrer.
  <StrictMode> 
    <App />
  </StrictMode>,
)

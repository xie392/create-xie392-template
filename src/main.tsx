import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './app'
import './styles/globals.css'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter future={{ v7_startTransition: true}}>
            <App />
        </BrowserRouter>
    </StrictMode>
)

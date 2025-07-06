import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Routes>
            <Route index element={<App />} />
        </Routes>
    </BrowserRouter>
)

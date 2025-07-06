import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import { ModalProvider } from './Context/ModalContext.jsx'

createRoot(document.getElementById('root')).render(
    <ModalProvider>
        <BrowserRouter>
            <Routes>
                <Route index element={<App />} />
            </Routes>
        </BrowserRouter>
    </ModalProvider>
)

import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client'
import './index.css'
import { ThemeProvider } from './components/ThemeContext/ThemeContext.tsx';
import { HeadProvider } from 'react-head';
import { App } from './App.tsx';


createRoot(document.getElementById('root')!).render(
    <BrowserRouter basename='/tensioraAutomatic/'>
        <HeadProvider>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </HeadProvider>
    </BrowserRouter>


)

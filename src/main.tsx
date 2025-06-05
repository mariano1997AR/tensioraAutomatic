import {BrowserRouter} from 'react-router-dom';
import { createRoot } from 'react-dom/client'
import './index.css'
import {App} from './App.tsx'
import { ThemeProvider } from './components/ThemeContext/ThemeContext.tsx';

createRoot(document.getElementById('root')!).render(
    <BrowserRouter basename='/tensioraElectric'>
        <ThemeProvider>
              <App />
        </ThemeProvider>
    </BrowserRouter>
 

)

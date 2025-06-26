import {  createBrowserRouter, RouterProvider } from 'react-router-dom';
import { createRoot } from 'react-dom/client'
import './index.css'
import { ThemeProvider } from './components/ThemeContext/ThemeContext.tsx';
import { HeadProvider } from 'react-head';
import { Layout } from './components/Layout/Layout.tsx';
import { Home } from './page/Home/Home.tsx';
import { Contacto } from './page/Contacto/Contacto.tsx';
import { Servicios } from './page/Servicios/Servicios.tsx';
import { TerminosCondiciones } from './page/TerminosCondiciones/TerminosCondiciones.tsx';
import { Productos } from './page/Productos/Productos.tsx';
import { Formulas } from './page/Demos/Demos.tsx';


const router = createBrowserRouter([
    {
        path:'/',
        element:<Layout />,
        children:[
            {index:true,element:<Home />},
            {path:'home',element:<Home />},
            {path:'contacto',element:<Contacto />},
            {path:'servicios',element:<Servicios />},
            {path:'terminos-condiciones',element:<TerminosCondiciones />},
            {path:'herramientas/Productos',element:<Productos />},
            {path:'herramientas/demos',element:<Formulas />}
           
           
        ]
    }
],{
    basename:'/tensioraAutomatic/'
})

createRoot(document.getElementById('root')!).render(
   
        <HeadProvider>
            <ThemeProvider>
                 <RouterProvider router={router} />
            </ThemeProvider>
        </HeadProvider>

  

)

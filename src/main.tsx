import {  createBrowserRouter, RouterProvider } from 'react-router-dom';
import { createRoot } from 'react-dom/client'
import './index.css'
import { ThemeProvider } from './components/ThemeContext/ThemeContext.tsx';
import { HeadProvider } from 'react-head';
import { Layout } from './components/Layout/Layout.tsx';
import { Inicio } from './page/Inicio/Inicio.tsx';
import { Contacto } from './page/Contacto/Contacto.tsx';
import { Servicios } from './page/Servicios/Servicios.tsx';
import { TerminosCondiciones } from './page/TerminosCondiciones/TerminosCondiciones.tsx';
import { Productos } from './page/Productos/Productos.tsx';
import { Desarrollo } from './page/Desarrollo/Desarrollo.tsx';


const router = createBrowserRouter([
    {
        path:'/',
        element:<Layout />,
        children:[
            {index:true,element:<Inicio />},
            {path:'inicio',element:<Inicio />},
            {path:'contacto',element:<Contacto />},
            {path:'servicios',element:<Servicios />},
            {path:'terminos-condiciones',element:<TerminosCondiciones />},
            {path:'herramientas/Productos',element:<Productos />},
            {path:'herramientas/desarrollo',element:<Desarrollo />}
           
           
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

import { useTheme } from '../ThemeContext/ThemeContext';
import './TiposServicios.css';
import { Link } from 'react-router-dom';


export const TiposServicios: React.FC = () => {
    const { theme } = useTheme();
    return (
        <>
            <main>
                <h1 className='text-center py-2'>Acerca de nuestros servicios</h1>
                <section className='container-flex-tipos-servicios'>

                    <article className='left-items-tipos-servicios text-center' style={{ borderColor: theme === "dark" ? ' #F5F5F5' : '#4A4947' }}>
                           <h2 className='text-center '>Automatización</h2>
                           <ul className='text-center text-2xl'>
                               <li> 
                                    - Instalación y configuración de PLCs(controladores lógicos programables)
                                
                               </li>
                               <li>
                                   - Configuración y programación de PLCs y HMI.
                               </li>
                               <li>
                                   - Montajes de tableros eléctricos de control.
                               </li>
                           </ul>

                           <div className='btn-mas-informacion'>
                                <Link className='a-link-servicios' style={{borderColor: theme === "dark" ? ' #F5F5F5' : '#4A4947',color:theme === "dark" ? 'white':'black'}} to='/servicios'>Más información</Link>
                           </div>
                        
                    </article>
                    <article className='left-items-tipos-servicios text-center' style={{ borderColor: theme === "dark" ? ' #F5F5F5' : '#4A4947' }}>
                           <h2 className='text-center'>Programación </h2>
                           <ul className='text-center text-2xl'>
                               <li> 
                                      - Desarrollo web
                               </li>
                               <li>
                                     - Automatización y Scripts
                               </li>
                               <li>
                                     - Base de datos
                               </li>
                               <li>
                                     - Servicios específicos para rubrtos
                               </li>
                           </ul>
                           <div className='btn-mas-informacion'>
                                <Link className='a-link-servicios' style={{borderColor: theme === "dark" ? ' #F5F5F5' : '#4A4947',color:theme === "dark" ? 'white':'black'}} to='/servicios'>Más información</Link>
                           </div>
                           
                    </article>

                </section>

            </main>


        </>
    )
}
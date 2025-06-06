import './NavbarPc.css';
import { Link } from 'react-router-dom';
import { ThemeSwitcher } from '../ThemeSwitcher/ThemeSwitcher';
import { useTheme } from '../ThemeContext/ThemeContext';

export const NavbarPc: React.FC = () => {
    const {theme} = useTheme();
    return (
        <>
            <ul className="menu-links desaparece-dispositivo aparece-PC">
                <li className="linea-bottom py-1"><Link className="a hover:text-gray-400" style={{ color: theme === "dark" ? '#F5F5F5' : '#4A4947' }} to="/funcionamiento" >¿Cómo funciona la App?</Link></li>
                <li className="linea-bottom py-1"><Link className="a hover:text-gray-400" style={{ color: theme === "dark" ? '#F5F5F5' : '#4A4947' }} to="/blogger" >Consejos</Link></li>

                {/* proxima funcionalidad
                               <li className="nav-item dropdown">
                                   <a className="nav-link dropdown-toggle mb-2 py-1" role="button" data-bs-toggle="dropdown">Nosotros</a>
                                   <ul className="dropdown-menu mt-4">
                                       <li><Link className="dropdown-item item-link-menu" to='/historia/nosotros'>Historia</Link></li>
                                       <li><Link className="dropdown-item item-link-menu" to='/historia/terminos-condiciones'>Terminos y condiciones</Link></li>
           
                                   </ul>
                               </li>*/}

                <li className="click "><Link className="a mb-2 bordes" style={{ color: theme === "dark" ? '#4A4947' : '#F5F5F5', background: theme === "dark" ? '#FCEF91' : '#60B5FF' }} to='/iniciar-sesion'>Ingresar</Link></li>
                <li className="click "><Link className="a mb-2 bordes" style={{ color: theme === "dark" ? '#4A4947' : '#F5F5F5', background: theme === "dark" ? '#FCEF91' : '#60B5FF' }} to='/agendar'>Agendar Cita</Link></li>
                <li className="switch desaparecer-responsive "><ThemeSwitcher /></li>
            </ul>

        </>
    )
}
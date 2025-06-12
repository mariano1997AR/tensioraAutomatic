import './NavbarPc.css';
import { Link } from 'react-router-dom';
import { ThemeSwitcher } from '../ThemeSwitcher/ThemeSwitcher';
import { useTheme } from '../ThemeContext/ThemeContext';

export const NavbarPc: React.FC = () => {
    const { theme } = useTheme();
    return (
        <>
            <ul className="menu-links desaparece-dispositivo aparece-PC">
                <li className="linea-bottom py-1"><Link className="a hover:text-gray-400" style={{ color: theme === "dark" ? '#F5F5F5' : '#4A4947' }} to="/Home" >Home</Link></li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle mb-2 py-1" role="button" data-bs-toggle="dropdown">Herramientas</a>
                    <ul className="dropdown-menu mt-4">
                        <li><Link className="dropdown-item item-link-menu" to='/herramientas/formulas-para-electricistas'>Formulas</Link></li>
                        <li><Link className='dropdown-item item-link-menu' to='/herramientas/tipo-de-cables'>Tipo de cables</Link></li>

                    </ul>
                </li>

                <li className="click "><Link className="a mb-2 bordes" style={{ color: theme === "dark" ? '#4A4947' : '#F5F5F5', background: theme === "dark" ? '#FCEF91' : '#60B5FF' }} to='/ingresar'>Ingresar</Link></li>
                <li className="click "><Link className="a mb-2 bordes" style={{ color: theme === "dark" ? '#4A4947' : '#F5F5F5', background: theme === "dark" ? '#FCEF91' : '#60B5FF' }} to='/contacto'>Contacto</Link></li>
                <li className="switch desaparecer-responsive "><ThemeSwitcher /></li>
            </ul>

        </>
    )
}
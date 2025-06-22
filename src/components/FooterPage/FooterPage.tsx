import { useTheme } from '../ThemeContext/ThemeContext';
import './FooterPage.css';
import { Link } from 'react-router-dom';
import { WhatsappFlotante } from '../WhatsappFlotante/WhatsappFlotante';


export const FooterPage: React.FC = () => {
    const { theme } = useTheme();
    return (
        <>
            <footer className='container-footer'>
                <section className="container-footer-pc">
                    <section className='columna-container desaparecer-columnas'>
                        <article className='columna-redes-sociales'>
                            <ul className='submenu-redesociales'>
                                <li className="logo-footer">Tensiora<span style={{ color: theme === "dark" ? '#FFA55D' : '#60B5FF' }}> Automatic</span>™</li>
                            </ul>

                        </article>
                        <article className='columna-redes-sociales'>
                            <ul >
                                <li className='subtitulo-footer'><b>Nuestra politicas</b></li>
                                <li><Link to='/terminos-condiciones' className="link" style={{ color: theme === "dark" ? ' #F5F5F5' : '#4A4947' }}>Politicas de privacidad</Link></li>
                                <li><Link to='/terminos-condiciones' className="link" style={{ color: theme === "dark" ? ' #F5F5F5' : '#4A4947' }}>Terminos y condiciones</Link></li>
                                <li><Link to='/home' className='link' style={{ color: theme === "dark" ? ' #F5F5F5' : '#4A4947' }}>Inicio</Link></li>
                            </ul>
                        </article>

                        <article className='columna-redes-sociales'>
                            <ul>
                                <li className='subtitulo-footer'><b>Sociales</b></li>
                                <li><a target="_blank" className="link" style={{ color: theme === "dark" ? ' #F5F5F5' : '#4A4947' }} href="https://www.linkedin.com/company/tensiora-electric/?viewAsMember=true">Linkedln</a></li>
                                <li><a target='_blank' className='link' style={{ color: theme === "dark" ? ' #F5F5F5' : '#4A4947' }} href="https://www.reddit.com/user/ScaryWeakness1024/">Reddit</a></li>
                                <li><a target='_blank' className='link' style={{ color: theme === "dark" ? ' #F5F5F5' : '#4A4947' }} href="https://www.instagram.com/tensiora/">Instagram</a></li>
                            </ul>
                        </article>
                    </section>

                    <section className='top-line-copy' style={{ borderTopColor: theme === "dark" ? ' #F5F5F5' : '#4A4947' }}>
                        <ul className='submenu-enterprise-footer'>
                            <li>Copyright 2025 - Tensionar<span style={{ color: theme === "dark" ? '#FFA55D' : '#60B5FF' }}> Automatic™</span></li>
                            <li><a></a></li>
                            <li><a></a></li>
                            <li><Link to='/medios-pagos' className="link" style={{ color: theme === "dark" ? ' #F5F5F5' : '#4A4947' }} >Medios de Pagos</Link></li>
                        </ul>
                    </section>

                </section>
                <section className="container-footer-dispositivos">
                    <header className="logo-dispositivo">Tensiora <span style={{ color: theme === "dark" ? '#FFA55D' : '#60B5FF' }}>Electric</span> ™</header>
                    <ul className={` submenu-footer-dispositivo ${theme === "dark" ? 'hover-oscuro' : 'hover-amarillo'}`}>
                        <li className='li-submenu'><Link to='/terminos-condiciones'  style={{ color: theme === "dark" ? ' #F5F5F5' : '#4A4947' }} > Términos y Condiciones</Link></li>
                        <li className='li-submenu'><a target="_blank" style={{ color: theme === "dark" ? ' #F5F5F5' : '#4A4947' }} href="https://www.linkedin.com/company/apoloixcode/?viewAsMember=true">Linkedln</a></li>
                        <li className='li-submenu'><a target='_blank' className='link' style={{ color: theme === "dark" ? ' #F5F5F5' : '#4A4947' }} href="https://www.instagram.com/tensiora/">Instagram</a></li>
                        <li className='li-submenu'><a target='_blank' className='link' style={{ color: theme === "dark" ? ' #F5F5F5' : '#4A4947' }} href="https://www.reddit.com/user/ScaryWeakness1024/">Reddit</a></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </section>
                <WhatsappFlotante />

            </footer>

        </>
    )
}
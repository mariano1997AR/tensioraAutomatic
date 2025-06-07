import './CarrouselContacto.css';

import imagenComunicacion1 from '../../assets/contacto/comunicacion-1.webp';
import imagenComunicacion2 from '../../assets/contacto/comunicacion-2.webp';
import imagenComunicacion3 from '../../assets/contacto/comunicacion-4.webp';
import { useTheme } from '../ThemeContext/ThemeContext';



export const CarrouselContacto: React.FC = () => {
    const { theme } = useTheme();



    return (
        <>
            <section id="demo" className="carousel slide carousel-contacto" data-bs-ride="carousel">

                {/* Indicators/dots */}
                <section className="carousel-indicators">
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                </section>

                {/* The slideshow/carousel */}
                <section className="carousel-inner">
                    <section className="carousel-item active">
                        <img
                            src={imagenComunicacion1}
                            alt="imagen-comunicacion-cliente-plataforma-tensionar"
                            className="d-block "
                            style={{ width: '100%' }}
                            loading='lazy'
                        />
                        <div className="carousel-caption" style={{ color: theme === "dark" ? 'white' : 'black' }}>
                            <h3>Comunicacion cliente-profesional</h3>
                           
                        </div>
                    </section>
                    <section className="carousel-item">
                        <img
                            src={imagenComunicacion2}
                            alt="imagen-comunicacion-cliente-plataforma-tensionar-AR"
                            className="d-block"
                            style={{ width: '100%' }}
                            loading='lazy'
                        />
                        <div className="carousel-caption" style={{ color: theme === "dark" ? 'white' : 'black' }}>
                            <h3>Personal tecnico va a ser multifuncional</h3>
                          
                        </div>
                    </section>
                    <section className="carousel-item">
                        <img
                            src={imagenComunicacion3}
                            alt="Imagen de como es visualmente en responsive"
                            className="d-block"
                            style={{ width: '100%' }}
                            loading='lazy'

                        />
                        <div className="carousel-caption"  style={{ color: theme === "dark" ? 'white' : 'black' }}>
                            <h3>Puedes usarlo en tu celular</h3>
                        
                        </div>
                    </section>
                </section>

                {/* Left and right controls/icons  */}
                <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                    <span className="carousel-control-next-icon"></span>
                </button>
            </section>



        </>
    )
}
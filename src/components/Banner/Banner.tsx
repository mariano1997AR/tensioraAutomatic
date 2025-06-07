import { useTheme } from '../ThemeContext/ThemeContext';
import './Banner.css';
import { Link } from 'react-router-dom';
import imagenqr from '../../assets/codigo/codigoqr.webp';


export const Banner: React.FC = () => {
    const { theme } = useTheme();
    return (
        <>
            <section className="container-banner">
                <section className=" flex-container-iniciar-registro" style={{ background: theme === "dark" ? '#213448' : '#AFDDFF' }}>
                    <article className="flex-item-iniciar-registro-left">
                          <img 
                             src={imagenqr}
                             alt="" 
                             loading='lazy' 
                             className='img-registro'
                        />
                       

                    </article>
                    <article className="flex-item-iniciar-registro-right py-30 pr-5" >
                        <h3 className="text-center text-2xl "><b className="subtitulo-hover">Escanea el código QR</b></h3>
                        <p className="mb-4 mx-2">
                            Si quieres probar la aplicacion has click abajo en el boton de inicia sesion
                        </p>
                        <Link className="hover:bg-sky-700 text-center inicia-registro " to='/home'>Inicia sesion</Link>

                    </article>


                </section>
            </section>

        </>
    )
}
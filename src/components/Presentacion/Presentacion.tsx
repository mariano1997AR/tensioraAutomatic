import { useTheme } from "../ThemeContext/ThemeContext"
import presentacionSitioOscuro from "../../assets/presentacion/presentacion-bienvenida-mejorado.webp";
import presentacionSitioClaro from "../../assets/presentacion/presentacion-bienvenida-tensiora-mejorado-claro.webp";
import './Presentacion.css';
import { Link } from "react-router-dom";

export const Presentacion = () => {
    const { theme } = useTheme();
    return (
        <>
            {theme === 'dark' ?
                <>
                    <section className="container-presentacion-tensiora">
                        <img
                            src={presentacionSitioOscuro}
                            alt="Es la imange promocional"
                            className="img-presentacion-sitio"    
                            loading="lazy"
                        />
                        <article className="texto-centrado">
                             <h1 className="text-center">Automatiza tu negocio con un asistente virtual</h1>
                             <p className="text-center">Deja tus tareas repetitivas en manos de nuestro asistente rocket en donde va a responder a las necesidades que quieras que haga.
                                 No pierdas tiempo con contratar a una persona sino dejala en manos de rocket 
                                 </p><Link to='/agendar' className="link-ir-clientes text-center btn-auto " style={{borderColor:theme === "dark" ? 'white':'black',color:theme === "dark" ? 'white':'black'}}>Empieza ahora</Link>
                       
                        </article>
                    </section>

                </> : (
                    <>
                        <section className="container-presentacion-tensiora">
                        <img
                            src={presentacionSitioClaro}
                            alt="Es la imange promocional"
                            className="img-presentacion-sitio"    
                            loading="lazy"
                        />
                        <article className="texto-centrado">
                             <h1 className="text-center">Automatiza tu negocio con un asistente virtual</h1>
                             <p className="text-center">Deja tus tareas repetitivas en manos de nuestro asistente rocket en donde va a responder a las necesidades que quieras que haga.
                                 No pierdas tiempo con contratar a una persona sino dejala en manos de rocket 
                                 </p><Link to='/clientes' className="link-ir-clientes text-center btn-auto " style={{color:theme === "light" ? 'black':'white'}} >Empieza ahora</Link>
                       
                        </article>
                    </section>
                    
                    </>
                )}

        </>
    )
}
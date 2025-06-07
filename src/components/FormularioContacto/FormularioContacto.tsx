import './FormularioContacto.css';
import { useState } from 'react';
//import { useNavigate } from 'react-router-dom';
import { useTheme } from '../ThemeContext/ThemeContext';
import {ToastContainer} from "react-toastify";
import presentacionContacto from '../../assets/contacto/comunicacion-1.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser,faEnvelope} from '@fortawesome/free-solid-svg-icons';



export const FormularioContacto: React.FC = () => {

    const { theme } = useTheme();
    const [nombre, setNombre] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [consulta,setConsulta] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);


    //const navigate = useNavigate();


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
   
        /*
        const res = await login(user, pass);
        setTimeout(() => {
            if (res.data.success) {
                onLogin();
                navigate("/dashboard", { replace: true });
            } else {
                toast.error("Crendenciales incorrectas", {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: true,
                });
            }
            setLoading(false);


        }, 6000);*/


    }
    return (
        <>
            <section className="flex-container-iniciar-sesion">
                <section className="flex-item-left-sesion">
                    <img
                        src={presentacionContacto}
                        alt="es una imagen ilustrativa de un obrero trabajando en un edificio donde otorga sus servicios gracias a LabureYA"
                        className="img-left-sesion"
                        loading="lazy"
                    />
                </section>
                {/*style={{border:theme === "dark" ?  '2px solid rgba(255, 255, 255, .2)' : '2px solid #222831'}} */}
                <section className="flex-item-right-sesion mx-5">
                    <form className="mx-5" onSubmit={handleSubmit} >
                        <p className="contacto">Bienvenido!</p>
                        <p className="text-center ">Ingresa tus datos </p>
                        <article className={`input-box-iniciar-sesion`} >
                            <input
                                type="text"
                                placeholder="Nombre"
                                value={nombre}
                                onChange={(e) => setNombre(e.target.value)}
                                required
                                className={`
                                    border p-2 rounded
                                    input-register
                                    ${theme === "dark" ? "placeholder-oscuro" : "placeholder-claro"}
                                  `}
                            />

                            <FontAwesomeIcon className="i" icon={faUser}></FontAwesomeIcon>
                        </article>
                        <article className="input-box-iniciar-sesion">
                            <input
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className={`
                                    border p-2 rounded
                                    input-register
                                    ${theme === "dark" ? "placeholder-oscuro" : "placeholder-claro"}
                                  `}
                            />
                            <i className="fa-regular fa-envelope"></i>
                            <FontAwesomeIcon className="i" icon={faEnvelope}></FontAwesomeIcon>
                        </article>
                        <article>
                            <textarea
                               value={consulta}
                               onChange={(e)=> setConsulta(e.target.value)}
                               required
                               placeholder='Escribe tu consulta....'
                               className={`
                                   border-textarea
                                   border
                                    ${theme === "dark" ? "placeholder-oscuro" : "placeholder-claro"}
                                `}
                            >

                            </textarea>
                        </article>
                 

                        <button
                            type="submit"
                            className="btn-send pb-2 mb-3"
                            name="enviar"
                            id="button"
                            value="Ingresar"
                            disabled={loading}
                        >
                            {loading ? <div className="flex justify-center">
                                <div className="w-5 h-5 border-2 border-dark border-t-white rounded-full animate-spin"></div>
                            </div> : 'Enviar consulta'}

                        </button>
                        <ToastContainer />

                    </form>

                </section>
            </section>

        </>
    )
}
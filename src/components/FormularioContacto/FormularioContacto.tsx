import './FormularioContacto.css';
import { useState } from 'react';
//import { useNavigate } from 'react-router-dom';
import { useTheme } from '../ThemeContext/ThemeContext';
import {ToastContainer} from "react-toastify";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser,faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';



export const FormularioContacto: React.FC = () => {

    const { theme } = useTheme();
    const [nombre, setNombre] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [consulta,setConsulta] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);

    const form = useRef<HTMLFormElement>(null);


    //const navigate = useNavigate();


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        if(!form.current) return;

        emailjs
          .sendForm(
             "service_154g6mb",
             "__ejs-test-mail-service__",
             form.current,
             "Piq7AaS3INx_H6EFB" //public key (en este caso se usa el backend para mostrar la clave publica para mas seguridad)
          )


   

    }
    return (
        <>
            <section className="flex-container-iniciar-sesion">
                <section className="flex-item-left-sesion" style={{background:theme === "dark" ? '#F7F7F7':'#393E46'}}>
                   <h1 className='titulo-contacto' style={{color:theme === "dark" ? '#393E46':'#F7F7F7'}}>Contactanos para tus  <span className='mx-2' style={{color:theme === "dark" ? '#FFD66B':'#60B5FF'}}>consultas!</span></h1>
                </section>
                {/*style={{border:theme === "dark" ?  '2px solid rgba(255, 255, 255, .2)' : '2px solid #222831'}} */}
                <section className="flex-item-right-sesion mx-5">
                    <form ref={form} className="mx-5" onSubmit={handleSubmit} >
                        <p className="contacto">Contactanos!</p>
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
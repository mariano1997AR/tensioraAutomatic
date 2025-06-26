import './FormularioContacto.css';
import { useState } from 'react';
import { useTheme } from '../ThemeContext/ThemeContext';
import { ToastContainer,toast } from "react-toastify";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';



export const FormularioContacto = () => {

    const { theme } = useTheme();
    const [nombre, setNombre] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [consulta, setConsulta] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);

    const form = useRef<HTMLFormElement>(null);



    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        const loadingToast = toast.loading("Enviando mensaje...");

        if (!form.current) return;

        try {
            await emailjs.sendForm(
                "service_154g6mb",
                "template_jd0n67k",
                form.current,
                "Piq7AaS3INx_H6EFB" //public key (en este caso se usa el
            );
            toast.update( loadingToast,{
              render: "Mensaje enviado con exito",
              type:"success",
              isLoading:false,
              autoClose:3000,
              closeButton:true,
               
            });

            form.current.reset(); //Limpiar el formulario 

        } catch (error: any) {
            toast.update(loadingToast,{
                render:'Error al enviar el mensaje',
                type:"error",
                isLoading:false,
                autoClose:4000,
                closeButton:true,
            });
               console.error("Erro al enviar",error);
             
        } finally{
            setLoading(false); //ocultar el loader
        }

    }
    return (
        <>
            <section className="flex-container-contacto" >
                <section className="flex-item-left-contacto"   >
                    <h1 className='titulo-contacto ' >Contactanos para mas  <span className='mx-2' style={{ color: theme === "dark" ? '#FFD66B' : '#60B5FF' }}>información!</span></h1>
                </section>
               
                <section className="flex-item-right-contacto mx-5">
                    <form ref={form} className="mx-5" onSubmit={handleSubmit} >
                        <p className="contacto">Contactanos!</p>
                        <p className="text-center ">Ingresa tus datos </p>
                        <article className={`input-box-iniciar-sesion`} >
                            <input
                                type="text"
                                placeholder="Nombre"
                                name='nombre'
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
                                name='email'
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
                                onChange={(e) => setConsulta(e.target.value)}
                                required
                                name='consulta'
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
                        <ToastContainer 
                           
                        
                        />

                    </form>

                </section>
            </section>

        </>
    )
}
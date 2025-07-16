import './Clientes.css';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../components/apis/apis';
import { useTheme } from '../../components/ThemeContext/ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { toast, ToastContainer } from 'react-toastify';
import { Title, Meta } from 'react-head';
import { BtnAtras } from '../../components/BtnAtras/BtnAtras';

export const Clientes: React.FC = () => {

    const { theme } = useTheme();
    const [user, setUser] = useState<string>("");
    const [pass, setPass] = useState<string>("");
    const [mostrar, setMostrar] = useState<boolean>(false);


    const navigate = useNavigate();

    const toggleMostrar = () => setMostrar((prev) => !prev);


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const res = await login(user, pass);

            localStorage.setItem('token', res.data.token);
            navigate('/dashboard', { replace: true });

        } catch (error) {
            toast.error("Credenciales Incorrectas", {
                className: 'error',
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: true
            })
        }
    }

    return (
        <>
            <Title>Clientes | Tensiora Automatic</Title>
            <Meta name='description' content='Sitio de ingreso para entrar en la aplicacion de tensiora Electric' />
            <Meta name='keywords' content='login de tensiora electric, entrada de tensiora electric, electricos' />
            <main className='container-ingresar-tensiora'>
                <section className='py-4'>
                    <BtnAtras />
                </section>
                <section className="flex-container-iniciar-sesion">
                    <section className="flex-item-left-sesion" style={{ background: theme === "dark" ? 'white' : '#2C2C2C', border: theme === 'dark' ? '1px white' : 'black' }}>
                        <article>
                            <h1 className='titulo-bienvenida-tensiora-login' style={{ color: theme === 'dark' ? '#222831' : '#F2F2F2' }}>Bienvenidos! A Tensiora <span className='mx-2' style={{ color: theme === "dark" ? '#FFA55D' : '#60B5FF' }}> Automatic</span></h1>
                        </article>
                    </section>
                    <section className="flex-item-right-sesion mx-5">
                        <form className="mx-5" onSubmit={handleSubmit} >
                            <p className="contacto">Bienvenido!</p>
                            <p className="text-center ">Ingresa tus datos </p>
                            <article className={`input-box-iniciar-sesion`} >
                                <input
                                    type="text"
                                    placeholder="Usuario"
                                    value={user}
                                    onChange={(e) => setUser(e.target.value)}
                                    required
                                    className={`
                                    border p-2 rounded
                                    input-register
                                    ${theme === "dark" ? "placeholder-oscuro" : "placeholder-claro"}
                                  `}
                                />

                                <FontAwesomeIcon className="i" icon={faUser} />
                            </article>
                            <article className="input-box-iniciar-sesion">
                                <input
                                    type={mostrar ? "text" : "password"}
                                    placeholder="Contraseña"
                                    value={pass}
                                    onChange={(e) => setPass(e.target.value)}
                                    required
                                    className={`
                                    border p-2 rounded
                                    input-register
                                    ${theme === "dark" ? "placeholder-oscuro" : "placeholder-claro"}
                                  `}
                                />
                                <i className="fa-regular fa-envelope"></i>
                                <FontAwesomeIcon className="i" onClick={toggleMostrar} icon={mostrar ? faEyeSlash : faEye} />
                            </article>
                            <article className="mb-2 ">
                                <p className="py-2 pt-2 mb-3">¿Aún no eres usuario? </p><Link className="registrarse" style={{ border: theme === "dark" ? "2px solid white" : "2px solid black", color: theme === "dark" ? "#f5f5f5" : "#333" }} to='/prestador'>Registrate</Link>
                            </article>

                            <button
                                type="submit"
                                className="btn-send pb-2 mb-3"
                                name="enviar"
                                id="button"


                            >
                                Ingresar

                            </button>
                            <ToastContainer />
                            <Link className="mb-5 recuperar-contrasenia" style={{ color: theme === "dark" ? '#F2F4F7' : '#222222' }} to='/recuperar-contrasenia'>¿Olvidaste tu contraseña?</Link>
                        </form>

                    </section>
                </section>
            </main>

        </>
    )
}
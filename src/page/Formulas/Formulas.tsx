import { useTheme } from '../../components/ThemeContext/ThemeContext';
import { useState, useEffect } from 'react';
import './Formulas.css';
import { Link } from 'react-router-dom';
import { CircuitoSerie } from '../CircuitoSerie/CircuitoSerie';
import { CircuitoParalelo } from '../CircuitoParalelo/CircuitoParalelo';
import { BtnAtras } from '../../components/BtnAtras/BtnAtras';
import { VideoEmbebido } from '../../components/VideoEmbebido/VideoEmbebido';


export const Formulas: React.FC = () => {
    const { theme } = useTheme();
    const [loading, setLoading] = useState<boolean>(true);
    const [voltaje, setVoltaje] = useState<string>("0");
    const [resistencia, setResistencia] = useState<string>("0");
    const [corriente, setCorriente] = useState<string>("0");
    const [voltios, setVoltios] = useState<number | undefined>();
    const [valorCorriente, setValorCorriente] = useState<number | undefined>();
    const [valorResistencia, setValorResistencia] = useState<number | undefined>();

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000);

        return () => clearTimeout(timer);
    })

    //calculadoras
    const calcularVoltaje = () => {
        const v = Number(corriente) * Number(resistencia);
        setVoltios(v);
    };

    const calcularCorriente = () => {
        const I = Number(voltaje) / Number(resistencia);
        setValorCorriente(I);
    };

    const calcularResistencia = () => {
        const R = Number(voltaje) / Number(corriente);
        setValorResistencia(R);
    };

    return (
        <>
            <main className='container-formulas'>
                <section className='py-3 mx-2'>
                    <BtnAtras />
                </section>
                <section className={` container-dashboard desaparecer-dispositivo`} >
                    <ul className={`submenu-vertical-dashboard nav-pills ${theme === "dark" ? 'border-negro' : 'border-blanco'}`} role="tablist">
                        <li className='nav-item'><a className="nav-link active" data-bs-toggle="pill" href="#home">INICIO</a></li>
                        <li className='nav-item'><a className='nav-link' data-bs-toggle="pill" href="#gestion-clientes">Cálcular Voltajes</a></li>
                        <li className='nav-item'><a className='nav-link' data-bs-toggle="pill" href="#panel-tributario">Circuitos en paralelo y en serie</a></li>
                        <li className='nav-item'><a className='nav-link' data-bs-toggle="pill" href="#gestion-sueldos-jornales">Cálcular Potencia con Resistencia</a></li>
                        <li className='nav-item'><a className='nav-link' data-bs-toggle="pill" href="#facturacion-electronica">Cálcular Corriente en Monofásico</a></li>
                        <li className='nav-item'><a className='nav-link' data-bs-toggle="pill" href="#gestion-documental">Cálcular corriente en trifásico</a></li>
                    </ul>
                    <section className="tab-content">
                        <div id="home" className="section-informacion tab-pane active">
                            {loading ? <svg fill={theme === "dark" ? 'hsl(228, 100%, 96%)' : 'black'} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24.000000pt" height="24.000000pt"><rect x="1" y="4" width="6" height="14" opacity="1"><animate id="spinner_aqiq" begin="0;spinner_xVBj.end-0.25s" attributeName="y" dur="0.75s" values="1;5" fill="freeze" /><animate begin="0;spinner_xVBj.end-0.25s" attributeName="height" dur="0.75s" values="22;14" fill="freeze" /><animate begin="0;spinner_xVBj.end-0.25s" attributeName="opacity" dur="0.75s" values="1;.2" fill="freeze" /></rect><rect x="9" y="4" width="6" height="14" opacity=".4"><animate begin="spinner_aqiq.begin+0.15s" attributeName="y" dur="0.75s" values="1;5" fill="freeze" /><animate begin="spinner_aqiq.begin+0.15s" attributeName="height" dur="0.75s" values="22;14" fill="freeze" /><animate begin="spinner_aqiq.begin+0.15s" attributeName="opacity" dur="0.75s" values="1;.2" fill="freeze" /></rect><rect x="17" y="4" width="6" height="14" opacity=".3"><animate id="spinner_xVBj" begin="spinner_aqiq.begin+0.3s" attributeName="y" dur="0.75s" values="1;5" fill="freeze" /><animate begin="spinner_aqiq.begin+0.3s" attributeName="height" dur="0.75s" values="22;14" fill="freeze" /><animate begin="spinner_aqiq.begin+0.3s" attributeName="opacity" dur="0.75s" values="1;.2" fill="freeze" /></rect></svg> : <h1>Bienvenido a Tensiora Electric</h1>}
                            <p>Son calculadoras para electricistas.</p>
                        </div>
                        {/* Modulo aparte en carpeta componentes donde se va a separar toda logica para no romper la aplicacion en caso de cambios */}
                        <div id="gestion-clientes" className='section-informacion tab-pane '>
                            <section>
                                <h2 className='text-center'>Ley de Ohm</h2>
                                <p className='text-2xl'>Fórmula:    V = I.R </p>
                                <ul>
                                    <li> * V: Voltaje (Voltios,V)</li>
                                    <li> * I: Corriente (Amperios,A)</li>
                                    <li> * R: Resistencia (Ohmnios,Ω)</li>
                                </ul>
                            </section>
                            <section>
                                <h3 className='text-center py-2'>Calcular Voltaje (V)</h3>
                                <p className=' text-2xl'>Formula: V = I.R</p>
                                <p>Ejemplo: Tenes una resistencia de 20 Ω  y pasa una corriente de 2 amperios o 2A</p>
                            </section>
                            {/* ACA INGRESAMOS LOS DATOS */}

                            <section className='calculadora'>
                                <input
                                    type="type"
                                    value={corriente}
                                    onChange={(e) => setCorriente(e.target.value)}
                                    placeholder='Ingresa el valor de corriente en Amperios'
                                    className='inputs text-center'
                                />

                                <input
                                    type="type"
                                    value={resistencia}
                                    onChange={(e) => setResistencia(e.target.value)}
                                    placeholder='Ingresa la resistencia en Ohmnios '
                                    className='inputs text-center'
                                />

                                <button
                                    onClick={calcularVoltaje}
                                    className='btn-calcular'

                                >
                                    Obtener Voltaje
                                </button>
                                <p className='text-center text-2xl py-2'>El valor de V es : {voltios}V</p>
                            </section>

                            <section>
                                <h3 className='text-center py-2'>Calcular Corriente (I)</h3>
                                <p className=' text-2xl'>Formula:  I = V / R</p>
                                <p>Ejemplo: Tenés un foco que funciona con 220V y su resistencia es de 110 Ω.</p>
                            </section>

                            <section className='calculadora'>
                                <input
                                    type="type"
                                    value={voltaje}
                                    onChange={(e) => setVoltaje(e.target.value)}
                                    placeholder='Ingresa el valor de voltaje en v'
                                    className='inputs text-center'
                                />

                                <input
                                    type="type"
                                    value={resistencia}
                                    onChange={(e) => setResistencia(e.target.value)}
                                    placeholder='Ingresa la resistencia en Ohmnios '
                                    className='inputs text-center'
                                />

                                <button
                                    onClick={calcularCorriente}
                                    className='btn-calcular'

                                >
                                    Obtener Corriente
                                </button>
                                <p className='text-center text-2xl py-2'>El valor de I es : {valorCorriente}A</p>
                            </section>

                            <section>
                                <h3 className='text-center py-2'>Calcular Resistencia(Ω)</h3>
                                <p className=' text-2xl'>Formula: R = V / I</p>
                                <p>Ejemplo: Un equipo consume 5 amperios con una tensión de 120 V</p>
                            </section>

                            <section className='calculadora'>
                                <input
                                    type="type"
                                    value={voltaje}
                                    onChange={(e) => setVoltaje(e.target.value)}
                                    placeholder='Ingresa el valor de voltaje en v'
                                    className='inputs text-center'
                                />

                                <input
                                    type="type"
                                    value={corriente}
                                    onChange={(e) => setCorriente(e.target.value)}
                                    placeholder='Ingresa el valor de corriente en amperios '
                                    className='inputs text-center'
                                />

                                <button
                                    onClick={calcularResistencia}
                                    className='btn-calcular'

                                >
                                    Obtener Corriente
                                </button>
                                <p className='text-center text-2xl py-2'>El valor de R es : {valorResistencia}Ω</p>
                            </section>




                        </div>
                        <div id='panel-tributario' className='section-informacion tab-pane'>
                            <section>
                                <article className='py-2'>
                                    <CircuitoParalelo />
                                </article>

                                <article className='py-2'>
                                    <CircuitoSerie />
                                </article>
                                <article className='py-4'>
                                    <h4 className='text-center py-4'>Diferencias entre los dos tipos de circuitos:</h4>
                                    <table className="table table-striped">
                                        <thead>
                                            <tr>
                                                <th>Caracteristica</th>
                                                <th>Circuito en Serie</th>
                                                <th>Circuito en Paralelo</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Corriente</td>
                                                <td>Sin cambios</td>
                                                <td>Dividida</td>
                                            </tr>
                                            <tr>
                                                <td>Voltaje</td>
                                                <td>Dividido</td>
                                                <td>Sin cambios</td>
                                            </tr>
                                            <tr>
                                                <td>Resistencia Total</td>
                                                <td>Suma de Resistencias</td>
                                                <td>Mayormente menor que la resistencia individual</td>
                                            </tr>

                                            <tr>
                                                <td>Impacto de falla</td>
                                                <td>Interrupción total</td>
                                                <td>No afecta al resto del circuito</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </article>
                            </section>
                        </div>
                        <div id='gestion-sueldos-jornales' className='section-informacion tab-pane'>

                        </div>
                        <div id='facturacion-electronica' className='section-informacion tab-pane'>

                        </div>
                        <div id='gestion-documental' className='section-informacion tab-pane'>

                        </div>


                    </section>

                </section>
                <section className='container-dashboard-responsive desaparecer-pc'>
                    <section>
                         <VideoEmbebido />
                    </section>
                    <section>
                         <h4 className='text-center py-2 text-2xl'>Formulas</h4>
                    </section>
                    <section className="d-flex mb-2">
                        <Link className={`p-2 flex-fill  text-center py-5 pb-5 mx-2 marcos link-cliente ${theme === "dark" ? 'fondo-negro' : 'fondo-blanco'}`} to='/calcularVoltajes'>VOLTAJES</Link>
                        <Link className={`p-2 flex-fill  text-center py-5 pb-5 mx-2 marcos link-cliente ${theme === "dark" ? 'fondo-negro' : 'fondo-blanco'}`} to='/circuito-en-paralelo'>CIRCUITO EN PARALELO</Link>
                        <Link className={`p-2 flex-fill  text-center py-5 pb-5 mx-2 marcos link-cliente ${theme === "dark" ? 'fondo-negro' : 'fondo-blanco'}`} to='/circuito-en-serie'>CIRCUITO EN SERIE</Link>

                    </section >
                    <section className="d-flex mb-2">
                        <Link className={`p-2 flex-fill  text-center py-5 pb-5 mx-2 marcos link-cliente ${theme === "dark" ? 'fondo-negro' : 'fondo-blanco'}`} to='/circuito-mixto'>CIRCUITO MIXTO</Link>
                        <Link className={`p-2 flex-fill  py-5 pb-5 mx-2 marcos link-cliente ${theme === "dark" ? 'fondo-negro' : 'fondo-blanco'}`} to='/potencia-tension'>POTENCIA</Link>
                        <Link className={`p-2 flex-fill  text-center py-5 pb-5 mx-2 marcos link-cliente ${theme === "dark" ? 'fondo-negro' : 'fondo-blanco'}`} to='/corriente-trifasico'>CORRIENTE EN TRIFASICO</Link>
                    </section>
                    <section className="d-flex mb-2">
                        <Link className={`p-2 flex-fill  py-5 pb-5 mx-2 marcos link-cliente ${theme === "dark" ? 'fondo-negro' : 'fondo-blanco'}`} to='/corriente-monofasico'>CORRIENTE EN MONOFASICO</Link>
                        <article className={`p-2 flex-fill text-center py-5 pb-5 mx-2 marcos ${theme === "dark" ? 'fondo-negro' : 'fondo-blanco'} `} >Calculadora</article>
                        <article className={`p-2 flex-fill text-center py-5 pb-5 mx-2 marcos ${theme === "dark" ? 'fondo-negro' : 'fondo-blanco'} `} >ATENCIÓN AL CLIENTE</article>
                    </section>
                </section>

            </main>

        </>
    )
}
import { useTheme } from '../../components/ThemeContext/ThemeContext';
import './Formulas.css';
import { Link } from 'react-router-dom';
import { BtnAtras } from '../../components/BtnAtras/BtnAtras';
import { VideoEmbebido } from '../../components/VideoEmbebido/VideoEmbebido';
import { Title, Meta } from 'react-head';


export const Formulas: React.FC = () => {
    const { theme } = useTheme();
 
    return (
        <>
            <Title>Formulas | Tensiora Electric</Title>
            <Meta name='description' content='formulas para electricistas, formulas electricas,formulas matematicas,matematicas,herramientas para electricistas' />
            <Meta name='keywords' content='formulas,matematica,electricistas,electrico,leyohm,circuitos,circuitos matematicos' />
            <main className='container-formulas'>
                <section className='py-3 mx-2'>
                    <BtnAtras />
                </section>
                <section className={` container-dashboard desaparecer-dispositivo`} >
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